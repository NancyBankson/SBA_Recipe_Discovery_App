import { useState, useEffect } from "react";

export function useLocalStorage(key: string, initialValue: any) {
    const [storedValue, setStoredValue] = useState (() => {
        try {
            const retrievedData = localStorage.getItem(key);
            return retrievedData ? JSON.parse(retrievedData) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.log(error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}