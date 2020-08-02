import axios from 'axios';

export const getAllPhones = async () => {
    const { data } = await axios.get('http://localhost:9000/phones');
    const allPhones = await data.phones;

    const phones = await allPhones.map( phone => {
        return {
            id: phone.id ,
            name: phone.name ,
            manufacturer: phone.manufacturer ,
            description: phone.description ,
            color: phone.color ,
            price: phone.price ,
            imageFileName: phone.imageFileName ,
            screen: phone.screen ,
            processor: phone.processor ,
            ram: phone.ram  
        }
    })

    return phones;
}
