import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const {_id , category, photo, shortDes, title, } = blog;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className='p-2 rounded-xl' src={photo} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-medium"> {category} </h2>
        <h2 className="card-title"> {title} </h2>
        <p className="text-base font-normal"> {shortDes} </p>
        <div className="card-actions justify-between">
          <Link>
            <button className="btn btn-grad">Details</button>
          </Link>
          <Link to={'/wishlist'}>
            <button className="btn btn-grad">Wishlist</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;