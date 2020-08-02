import { useState, useEffect } from 'react';
import { getAllPhones } from '../helpers/getAllPhones';

export const useFetchPhones = ( ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getAllPhones()
            .then( phones => {
                setState({
                    data: phones,
                    loading: false
                });
            })
    }, [])

    return state; // {data: [], loading: true }
}