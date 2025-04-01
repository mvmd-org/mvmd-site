const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Function to extract JSON from markdown files
function extractJsonFromMd(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const jsonBlocks = [];
    const regex = /```json\n([\s\S]*?)```/g;
    let match;

    while ((match = regex.exec(content)) !== null) {
        try {
            const jsonStr = match[1].trim();
            const jsonObj = JSON.parse(jsonStr);
            if (jsonObj['@context'] && jsonObj['@context'].includes('schema.org')) {
                jsonBlocks.push({
                    file: filePath,
                    json: jsonObj
                });
            }
        } catch (e) {
            console.error(`Error parsing JSON in ${filePath}:`, e.message);
        }
    }

    return jsonBlocks;
}

// Function to test schema against schema.org validator
async function testSchema(jsonObj) {
    try {
        const response = await axios.post('https://validator.schema.org/validate', {
            json: JSON.stringify(jsonObj),
            format: 'json'
        });
        return response.data;
    } catch (error) {
        console.error('Error testing schema:', error.message);
        return null;
    }
}

// Main function to process all MD files
async function processFiles() {
    const docsDir = path.join(__dirname, 'docs');
    const results = [];

    // Process all MD files
    function processDir(dir) {
        const files = fs.readdirSync(dir);
        
        for (const file of files) {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                processDir(fullPath);
            } else if (file.endsWith('.md')) {
                const jsonBlocks = extractJsonFromMd(fullPath);
                results.push(...jsonBlocks);
            }
        }
    }

    processDir(docsDir);

    // Test each schema
    console.log(`Found ${results.length} schema examples to test`);
    
    for (const result of results) {
        console.log(`\nTesting schema from ${result.file}`);
        const validationResult = await testSchema(result.json);
        
        if (validationResult && validationResult.errors && validationResult.errors.length > 0) {
            console.log('❌ Validation failed:');
            validationResult.errors.forEach(error => {
                console.log(`  - ${error.message}`);
            });
        } else {
            console.log('✅ Validation passed');
        }
    }
}

processFiles().catch(console.error); 