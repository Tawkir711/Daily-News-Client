import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const WishDetails = ({ item, setItmData, itmData }) => {
  // const { title, shortDes, category, _id, photo } = item;
  const [myData, setMyData] = useState(itmData);
  console.log(item, "9");
  console.log(myData);
  const { title, shortDes, category, _id, photo } = item;

  const handleRemove = (id) => {
    console.log("14", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-11-server-nine-psi.vercel.app/wishlist2/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            const remaining = myData?.filter((data) => data._id !== id);
            setItmData(remaining);
            console.log(data);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };
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
          <Link to={"/"}>
            <button className="btn btn-primary">Back home</button>
          </Link>
          <button onClick={() => handleRemove(_id)} className="btn btn-primary">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishDetails;
