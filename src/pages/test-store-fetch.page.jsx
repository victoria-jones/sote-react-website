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

    const checkTotalStock = () => {
        const seen = new Set();
        console.log(`check stock totals: ${JSON.stringify(stock)}`);

        const date = new Date().toISOString().split('T');
        const today = date[0];

        //sort stock instances based on date
        const unsortedStock = stock;
        const sortedStock = unsortedStock.sort((a, b) =>  b.stock_date - a.stock_date);

        //take first of each type of nursery strain after date sort
            //ignore duplicates
        
            //this first one would loop through the array twice.
        /*const uniqueNurseryStrains = Array.from(new Set(sortedStock.map(a => a.nursery_strain))).map(nursery_strain => {
            return sortedStock.find(a => a.nursery_strain === nursery_strain)
        });*/

            //this will only loop through the array once
        const uniqueNurseryStrains = sortedStock.filter(a => {
            const duplicate = seen.has(a.nursery_strain);
            seen.add(a.nursery_strain);
            return !duplicate;
        });

        //check if stock is more than 0
        const findZeroStock = uniqueNurseryStrains.findIndex(a => {
            return a.stock_total_available === 0;
        });

        uniqueNurseryStrains.splice(findZeroStock);
        

        //check the strains for availability_type and only keep the "public" ones
        for(let i in uniqueNurseryStrains) {
            console.log(uniqueNurseryStrains[i].nursery_strain.nursery_strain_code);
        }

        console.log(sortedStock);
        console.log(uniqueNurseryStrains);

    };

    //run after fetching data
    useEffect(() => {
        console.log('stock has updated');
        //run functions to sift through stock and decide what to display
            //consider stock date against the same nursery_strain
            //check if total stock is greater than 0
            //then check if the nursery_strain is set to availability_type public
                //if it is in stock, and availability type is public add the strain to a list
                    //check for an remove duplicates.
        if(stock.length > 0) {
            checkTotalStock();
        }
    },[stock]);

    

    return(
        <div
        style={{
             margin: '20rem'
        }}>
            {JSON.stringify(stock)}
        </div>
    );
}