//import { useState, useEffect } from 'react'

export default function ApiDocumentation() {
   // const [swaggerJson, setSwaggerJson] = useState(null);

     /*useEffect(() => {
        async function fetchSwaggerJson() {
            try {
                const response = await fetch('http://localhost:3000/api-doku', {
                    headers: {
                        'Access-Control-Allow-Origin': 'http://localhost:3000'
                    }
                    });
                    if (!response.ok) {
                    throw new Error('Failed to fetch Swagger JSON');
                }
                const swaggerJson = await response.json();
                setSwaggerJson(swaggerJson);
            } catch (error) {
                console.error('Error fetching Swagger JSON:', error);
            }
        }

        fetchSwaggerJson();
    }, []);*/

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
        {/*swaggerJson ? (
                <pre>{JSON.stringify(swaggerJson, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )*/}
    </div>
  );
}