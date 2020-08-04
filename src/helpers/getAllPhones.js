import axios from 'axios';

export const getAllPhones = async () => {
    
    const { data } = await axios.get('http://localhost:9000/phones');
    const allPhones = await data.phones;
    const phones = await allPhones.map( phone => phone);

    return phones;
}
