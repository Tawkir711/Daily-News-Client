import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
  const details = useLoaderData();
  const {_id, title, photo, category, shortDes, longDes } = details;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="p-2 rounded-xl" src={photo} alt="" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-2xl font-medium"> Category: {category} </h2>
        <h2 className="text-2xl font-medium ">Title: {title} </h2>
        <p className="text-base font-normal"> {shortDes} </p>
        <p className="text-base font-normal"> {longDes} </p>
        <div className="card-actions justify-center">
          <Link to={'/'}>
            <button className="btn btn-grad">Back Home</button>
          </Link>
          <Link to={`/update/${_id}`}>
            <button className="btn btn-grad">Update</button>
          </Link>
        </div>
        <div>
          <h2 className='text-xl font-medium'>Comment Area</h2>
          <textarea className='border border-black' name="text" id="" cols="30" rows="5"></textarea>
          <input className='btn btn-sm' type="submit" value="Submit" />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;