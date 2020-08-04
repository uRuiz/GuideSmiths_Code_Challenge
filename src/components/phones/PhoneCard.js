import React from 'react';
import { Link } from 'react-router-dom';

export const PhoneCard = ({ imageFileName, name, price, id }) => {
    return (
        <div className="card ms-3" style={{ maxWidth: 500 }}>
            <div className="row no-gutters">
                <Link to={`./phone/id=${id}`} className="col-md-12">
                    <img src={`./assets/images/${imageFileName}`} className="card-img" alt={name} />
                </Link>
            </div>
            <div className="col-md-12">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{price} €</p>
                    <Link to={`./phone/id=${id}`}>
                        Full Info...
                    </Link>
                </div>
            </div>
        </div>
    )
}
