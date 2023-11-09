import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/Context';

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  const [value, setValue] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const handleCategory = (e) => {
    const newValue = e.target.value;
    console.log(newValue);
    setValue(newValue);
  }
  const handleAddBlog = event => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const longDes = form.longDes.value;
    const shortDes = form.shortDes.value;
    const photo = form.photo.value;
    const category = value;
    const allBlogs = {
      title, longDes, shortDes, photo, category, startDate, email:user.email , ownerName:user.displayName , ownerImage:user.photoURL
    };
    console.log(allBlogs);

    fetch('http://localhost:5000/addBlog', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(allBlogs)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Done",
            text: "Added Your Blog ",
            
          });
        }
    })

  }
  return (
    <div className="bg-[#d148a142] p-4 lg:p-10 my-7">
      <Helmet>
        <title>Daily News / Add Blog</title>
      </Helmet>
      <h2 className="text-3xl font-bold">Add Blog</h2>
      <form onSubmit={handleAddBlog}>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="title"
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
            <select
              onChange={handleCategory}
              value={value}
              className="input input-bordered w-full"
            >
              <option value="Technology">Technology</option>
              <option value="Health & Wellness">Health & Wellness</option>
              <option value="Finance">Finance</option>
              <option value="Travel">Travel</option>
              <option value="Food & Dining">Food & Dining</option>
              <option value="Art & Creativity">Art & Creativity</option>
              <option value="Science & Nature">Science & Nature</option>
              <option value="Career & Professional Growth">
                Career & Professional Growth
              </option>
              <option value="Environment">Environment</option>
              <option value="Gardening">Gardening</option>
              <option value="Mindfulness & Well-being">
                Mindfulness & Well-being
              </option>
              <option value="Books & Literature">Books & Literature</option>
            </select>
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

export default AddBlog;