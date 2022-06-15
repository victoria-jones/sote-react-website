/***************
 * 
 *  use this component to fetch data from the api without needing to 
 *  rewrite the fetch every time
 *  
 *  just specify what data is wanted with these endpoints:
 *      - nurseries
 *      - strains
 *      - nursery_strains
 *      - stock
 * 
 */

import { useState, useEffect } from 'react';

export default function ApiDataFetch (endpoint) {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    //fetch data from the SOTE API onload
    useEffect(() => {
        const loadAsyncStuff = async () => {
            try { 
                const res = await fetch(`http://127.0.0.1:8000/api/${endpoint}`);
                const json = await res.json();

                setData(json)
            } catch (error) {
                setError(error);
            } finally {
                setLoaded(true);
            }
        };
        loadAsyncStuff();
    }, []);

    return{ data, error, loaded};
}