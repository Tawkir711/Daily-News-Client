import React from 'react';
import { Link } from 'react-router-dom';

const WishDetails = ({ item }) => {
    const { title, shortDes, category, _id, photo } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={photo} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title"> {category} </h2>
        <h2 className="card-title"> {title} </h2>
        <p> {shortDes} </p>
        <div className="card-actions">
          <Link to={'/details'}>
            <button className="btn btn-primary">Details</button>
          </Link>
          <button className="btn btn-primary">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default WishDetails;