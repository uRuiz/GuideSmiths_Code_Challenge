
export const getPhoneById = ( phones, id ) => {
    phones.filter( phone => phone.id === id)
    return phones.find( phone => phone.id === id );
}
