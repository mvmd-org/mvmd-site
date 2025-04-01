const https = require('https');
const fs = require('fs');
const path = require('path');

const SCHEMA_URL = 'https://schema.org/version/latest/schemaorg-current-https.jsonld';
// Output path relative to the script's location might need adjustment depending on where the script is run from.
// Let's assume it's run from the project root for now.
const OUTPUT_PATH = path.join(__dirname, '..', 'src', 'lib', 'schemaDefinitions.json');
const OUTPUT_DIR = path.dirname(OUTPUT_PATH);

console.log(`Starting schema.org definition update...`);
console.log(`Output path: ${OUTPUT_PATH}`);

// Ensure the output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    console.log(`Creating output directory: ${OUTPUT_DIR}`);
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

https.get(SCHEMA_URL, (res) => {
    let data = '';
    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
        error = new Error(`Request Failed. Status Code: ${statusCode}`);
    } else if (!/^application\/ld\+json(;|\s|$)/.test(contentType)) {
        // Adjusted regex to allow for semicolon, space, or end of string after ld+json
        error = new Error(`Invalid content-type. Expected application/ld+json but received ${contentType}`);
    }

    if (error) {
        console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        process.exit(1); // Exit with error code
        return;
    }

    res.setEncoding('utf8');
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        try {
            console.log('Download complete. Parsing JSON...');
            const schemaData = JSON.parse(data);
            console.log('JSON parsed successfully.');

            if (!schemaData['@graph'] || !Array.isArray(schemaData['@graph'])) {
                throw new Error('Invalid JSON-LD structure: Missing or invalid "@graph" array.');
            }

            const definitions = {
                types: {},
                properties: {}
            };

            console.log(`Processing ${schemaData['@graph'].length} items in @graph...`);

            schemaData['@graph'].forEach(item => {
                const id = item['@id']; // e.g., "schema:VideoObject"
                const type = item['@type']; // e.g., ["rdfs:Class"], "rdf:Property"
                const label = item['rdfs:label']?.['@value'] || item['rdfs:label'] || id; // Prefer @value if present, fallback to string or id
                const comment = item['rdfs:comment']?.['@value'] || item['rdfs:comment'] || ''; // Prefer @value

                if (!id) return; // Skip items without an ID

                const cleanId = id.startsWith('schema:') ? id.substring(7) : id; // Remove "schema:" prefix

                // Process Types (Classes)
                if (type && type.includes('rdfs:Class')) {
                    if (!definitions.types[cleanId]) {
                         definitions.types[cleanId] = {
                             id: cleanId,
                             label: label,
                             comment: comment,
                             properties: [] // We'll populate this later if needed, or just store property domains
                         };
                    } else {
                        // Merge comments if the type was already partially defined (less common)
                        definitions.types[cleanId].comment = definitions.types[cleanId].comment || comment;
                         definitions.types[cleanId].label = definitions.types[cleanId].label || label;
                    }
                }

                // Process Properties
                if (type && type.includes('rdf:Property')) {
                     // Extract domainIncludes and rangeIncludes (can be single ID or array)
                     const formatIncludes = (includeField) => {
                        if (!includeField) return [];
                        const includes = Array.isArray(includeField) ? includeField : [includeField];
                        return includes.map(inc => inc['@id']?.startsWith('schema:') ? inc['@id'].substring(7) : inc['@id']).filter(Boolean);
                     };

                     const domainIncludes = formatIncludes(item['schema:domainIncludes']);
                     const rangeIncludes = formatIncludes(item['schema:rangeIncludes']);

                     definitions.properties[cleanId] = {
                         id: cleanId,
                         label: label,
                         comment: comment,
                         domainIncludes: domainIncludes, // Types this property applies to
                         rangeIncludes: rangeIncludes   // Expected types for the property's value
                     };
                }
            });

            console.log(`Processed definitions: ${Object.keys(definitions.types).length} types, ${Object.keys(definitions.properties).length} properties.`);

            // --- Optional Step: Link properties to their types ---
            // This can make the structure larger but more convenient for the validator
            Object.values(definitions.properties).forEach(prop => {
                prop.domainIncludes.forEach(domainType => {
                    if (definitions.types[domainType]) {
                        if (!definitions.types[domainType].properties.includes(prop.id)) {
                             definitions.types[domainType].properties.push(prop.id);
                        }
                    }
                    // else { console.warn(`Property "${prop.id}" references unknown domain type "${domainType}"`); }
                });
            });
            console.log('Linked properties to their domain types.');
            // --- End Optional Step ---


            const outputJson = JSON.stringify(definitions, null, 2);
            console.log(`Writing definitions to ${OUTPUT_PATH}...`);
            fs.writeFileSync(OUTPUT_PATH, outputJson);
            console.log('Schema definitions updated successfully!');

        } catch (e) {
            console.error('Error processing schema data:', e);
            process.exit(1); // Exit with error code
        }
    });

}).on('error', (e) => {
    console.error(`Got error during download: ${e.message}`);
    process.exit(1); // Exit with error code
}); 