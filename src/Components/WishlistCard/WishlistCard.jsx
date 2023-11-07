import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const WishlistCard = () => {
  const cardData = useLoaderData();
  const { title, photo, category, shortDes, longDes } = cardData;

  const handleWishlist = () => {
    fetch('http://localhost:5000/wishlist2', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(cardData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Done",
          text: "Add To Wishlist",
         
        });
      }
      })
      .catch(() => {
       Swal.fire({
         icon: "warning",
         title: "Oops...",
         text: "Already Added",
       });
    })
  }
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
          <button onClick={handleWishlist} className="btn btn-grad">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
