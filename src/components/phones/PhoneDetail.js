import React from 'react';
import { useParams } from 'react-router-dom';
import { getPhoneById } from '../../helpers/getPhoneById';

export const PhoneDetail = () => {

    const { phoneId } = useParams();
    
    const phone = getPhoneById( phoneId );

    return (
        <div>
            <h1>Hola</h1>
        </div>
    )
}
