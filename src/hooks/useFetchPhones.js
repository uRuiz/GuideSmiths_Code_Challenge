import React, { useState, useEffect } from 'react';
import { getAllPhones } from '../helpers/getAllPhones';

export const useFetchPhones = ( ) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        setLoading(true);
        getAllPhones()
            .then( phones => {
                setData(phones);
                setLoading(false);
            })
    }, [])

    return {data, loading}; // {data: [], loading: true }
}