import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import WishDetails from '../Components/WishlistCard/WishDetails';

const Wishlist = () => {
  const items = useLoaderData();
  console.log(items);
  const [itmData, setItmData] = useState(items);
  console.log(itmData);
  return (
    <div className="my-4 bg-base-100">
      <div className="text-center">
        <h3 className="text-2xl font-semibold">Wishlist</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
        {
          items.map((item) => (
            <WishDetails item={item} key={item._id}></WishDetails>
          ))
        }
      </div>
    </div>
  );
};

export default Wishlist;