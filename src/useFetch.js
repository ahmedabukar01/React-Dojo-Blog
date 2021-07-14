import { useState, useEffect } from "react";
const useFetch = (url)=>{
    const [data,setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
        fetch(url)
        .then(data=>{
            if(!data.ok){
                throw Error('could not fetch the data');
            }
            return data.json();
        })
        .then(data=>{
            setData(data);
            setIsPending(false)
            setError(null)
        })
        .catch(err=>{
            setError(err.message);
            setIsPending(false)
        });
        
    }, [])

    return {data,isPending,error};
}

export default useFetch;

// asynch fetching data from json-server