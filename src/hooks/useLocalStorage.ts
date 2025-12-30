import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
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