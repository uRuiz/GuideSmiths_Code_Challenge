import React from 'react';
import { PhoneCard } from './PhoneCard';
import { useFetchPhones } from '../../hooks/useFetchPhones';
import Spinner from '../Spinner/Spinner';

export const PhonesList = () => {   

    const { data:phones, loading } = useFetchPhones();    

    return (
        <>
            {loading 
                ? <Spinner /> :
                <div className="card-columns">
                    {
                        phones.map( ({imageFileName, name, price, id}) => 
                            <PhoneCard
                                id={id}
                                imageFileName={imageFileName}
                                key={id}
                                name={name}
                                price={price}
                            />
                        )
                    }
                </div>
            }
        </>
    )
}
