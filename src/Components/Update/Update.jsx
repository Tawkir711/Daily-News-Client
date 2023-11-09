import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const updateData = useLoaderData();
  console.log(updateData, "6");
  const { _id, category, title, photo, shortDes, longDes } = updateData;

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const longDes = form.longDes.value;
    const shortDes = form.shortDes.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const allBlogs = {
      title,
      longDes,
      shortDes,
      photo,
      category,
    };
    console.log(allBlogs);
    fetch(`https://assignment-11-server-nine-psi.vercel.app/blogsId/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allBlogs),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Done",
            text: "Your data Updated",
          });
        }
      });
  };
  return (
    <div className="bg-[#d148a142] p-4 lg:p-10 my-7">
      <Helmet>
        <title>Daily News / Update Blog</title>
      </Helmet>
      <h2 className="text-3xl font-bold">Add Blog</h2>
      <form onSubmit={handleUpdate}>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="title"
                defaultValue={title}
                placeholder="Title"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={category}
                name="category"
                placeholder="Long Description"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Long Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={longDes}
                name="longDes"
                placeholder="Long Description"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={shortDes}
                required
                name="shortDes"
                placeholder="Short Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={photo}
                required
                name="photo"
                placeholder="Photo required URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Submit" className="btn btn-block" />
      </form>
    </div>
  );
};

export default Update;
