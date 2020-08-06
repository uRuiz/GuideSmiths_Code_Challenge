import React from 'react';
import { PhoneCard } from '../../components/Phones/PhoneCard';
import { useFetchPhones } from '../../hooks/useFetchPhones';
import Spinner from '../../components/Spinner/Spinner';

export const Home = () => {

  const { phones, loading } = useFetchPhones();

  if (phones.length === 0) {
    return (
      <h1>API is not running. Please, check it and start</h1>
    )
  }
  return (
    <>
      {loading
        ? <Spinner /> :
        <div className="card-columns">
          {
            phones.map(({ imageFileName, name, price, id }) =>
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
