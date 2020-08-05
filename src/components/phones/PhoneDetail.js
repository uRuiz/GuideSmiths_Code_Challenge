import React, { useContext } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getPhoneById } from '../../helpers/getPhoneById';
import PhonesContext from '../../context/PhonesContext'

import './PhoneDetail.css'

export const PhoneDetail = () => {

  const { id } = useParams();
  const { phones } = useContext(PhonesContext);

  if (id && phones.length !== 0) {
    const { name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = getPhoneById(phones, parseInt(id));
    return (
      <div className="card ms-8">
        <div className="no-gutters">
          <h1 className="">{name}</h1>
          <div className="center-image">
            <img src={require(`../../../public/assets/images/${imageFileName}`)} className="card-img" alt={name} />
          </div>
        </div>

        <div className="col-md-12">
          <div className="card-body">
            <p className="card-text">{description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><span className="font-weight-bold">Manufacturer:</span> {manufacturer}</li>
            <li className="list-group-item"><span className="font-weight-bold">Color:</span> {color}</li>
            <li className="list-group-item"><span className="font-weight-bold">Screen:</span> {screen}</li>
            <li className="list-group-item"><span className="font-weight-bold">Processor:</span> {processor}</li>
            <li className="list-group-item"><span className="font-weight-bold">RAM:</span> {ram}</li>
            <li className="list-group-item"><span className="font-weight-bold">Price:</span> {price} €</li>
          </ul>
        </div>
      </div>
    )
  }
  else {
    return <Redirect to="/" />
  }

}
