import { useContext, useState, useEffect } from 'react';
import { getAllPhones } from '../helpers/getAllPhones';
import PhonesContext from '../context/PhonesContext'

export const useFetchPhones = () => {

  const {phones, setPhones} = useContext(PhonesContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllPhones()
      .then(phones => {
        setPhones(phones);
        setLoading(false);
      })
  }, [setPhones])

  return { phones, loading }; // {data: [], loading: true }
}