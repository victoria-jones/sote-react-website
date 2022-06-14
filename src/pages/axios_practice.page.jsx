import { useState, useEffect } from 'react';

export default function Axios () {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    //fetch data from the SOTE API onload
    useEffect(() => {
        const loadAsyncStuff = async () => {
            try { 
                const response = await fetch('http://127.0.0.1:8000/api/nurseries');
                const json = await response.json();

                setData(json)
            } catch (error) {
                setError(error);
            } finally {
                setLoaded(true);
            }
        };
        loadAsyncStuff();
    }, []);

    return(
        <div>
            {`
                data: ${data}, 
                error: ${error}, 
                loaded: ${loaded}
            `}
        </div>
    );
}