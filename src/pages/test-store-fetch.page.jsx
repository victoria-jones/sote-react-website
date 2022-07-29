import { useState, useEffect } from 'react';

export default function TestStoreFetch () {
    const [stock, setStock] = useState([]);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    const [displayStrains, setDisplayStrains] = useState([]);

    //fetch the data
    useEffect(() => {
        const getStockData = async () => {
            let data;
            try {
                const res = await fetch(`http://127.0.0.1:8000/api/stock`);
                const json = await res.json();

                data = json;
            } catch (error) {
                setError(error);
            } finally {
                setLoaded(true);
                setStock(data);
            }
        };

        getStockData();
    },[]);

    //need to be able to fetch only in-stock strains
        //sort that out on the backend :)

    return(
        <div
        style={{
             margin: '20rem'
        }}>
            {JSON.stringify(stock)}
        </div>
    );
}