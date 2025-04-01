import type { APIContext } from 'astro'; // Assuming Astro-like API context, adjust if using raw Node or other framework
import { performValidation } from '../../lib/validationLogic'; // Adjust path as necessary

// Docusaurus doesn't have built-in API routes like Next.js or Astro out-of-the-box.
// This structure assumes a setup where API routes *can* be handled, perhaps via a plugin
// or if Docusaurus environment supports Node.js request handling in some way.
// If this is vanilla Docusaurus, this API route won't work directly and would need
// a different approach (e.g., a separate microservice or serverless function).

// --- Placeholder: Assuming a compatible API environment --- 

// This is a simplified representation. Actual Docusaurus API routes might need 
// a different structure or a plugin like docusaurus-plugin-api.

export async function GET(context: APIContext): Promise<Response> {
    const url = new URL(context.request.url);
    const code = url.searchParams.get('code');

    if (!code) {
        return new Response(JSON.stringify({ error: 'Missing \'code\' query parameter' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const jsonString = decodeURIComponent(code);
        const validationResult = performValidation(jsonString);

        // Determine overall status based on validation
        const status = validationResult.isValid ? 200 : 422; // 422 Unprocessable Entity if invalid

        return new Response(JSON.stringify(validationResult), {
            status: status,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        // Catch errors during decoding or unexpected issues in performValidation
        console.error("API Validation Error:", error);
        let message = 'Internal Server Error';
        if (error instanceof Error) {
             message = error.message;
        }
        return new Response(JSON.stringify({ error: 'Failed to validate JSON', details: message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

// --- End Placeholder --- 

// If running in a standard Node.js environment (outside Docusaurus pages context):
/*
import http from 'http';
import url from 'url';
import { performValidation } from '../lib/validationLogic'; // Adjust path

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url || '', true);

    if (parsedUrl.pathname === '/api/validate' && req.method === 'GET') {
        const code = parsedUrl.query.code as string | undefined;

        if (!code) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Missing \'code\' query parameter' }));
            return;
        }

        try {
            const jsonString = decodeURIComponent(code);
            const validationResult = performValidation(jsonString);
            const status = validationResult.isValid ? 200 : 422;

            res.writeHead(status, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(validationResult));
        } catch (error) {
            console.error("API Validation Error:", error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Failed to validate JSON' }));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});

const PORT = process.env.PORT || 3001; // Example port
server.listen(PORT, () => {
    console.log(`Validation API server running on port ${PORT}`);
});
*/ 