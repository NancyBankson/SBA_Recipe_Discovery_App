import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // const abortController = new AbortController();
        // const signal = abortController.signal;

        const fetchData = async () => {       

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            
            } catch (err) {
                console.error("Fetch error:", err);
                setData(null);
            }
        };

        fetchData();

        // return () => {
        //     AbortController.abort();
        // };
    }, [url]);
    return { data };
};