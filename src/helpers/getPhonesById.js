import React from 'react';


export const getPhonesById = ( id ) => {

    return phones.find( phone => phone.id === id );
}
