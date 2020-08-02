import React from 'react';
import { PhoneCard } from './PhoneCard';
import { useFetchPhones } from '../../hooks/useFetchPhones'

export const PhonesList = () => {   

    const { data:phones, loading } = useFetchPhones();

    return (
        <div className="card-columns">
            {
                phones.map(phone => (
                    <PhoneCard
                        key={phone.id}
                        {...phone}
                    />
                ))
            }
        </div>
    )
}
