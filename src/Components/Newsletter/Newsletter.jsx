import React from 'react';
import Swal from 'sweetalert2';

const Newsletter = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    console.log(email);
  }

  const handleEmail = () => {
    if (handleEmail) {
      Swal.fire({
        icon: "error",
        title: "Oops Try Again",
        text: error.message,
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control mx-auto md:w-4/12 my-10 px-3 ">
        <h1 className="text-2xl font-semibold">Newsletter Section</h1>
        <label className="label">
          <span className="label-text">Your Email</span>
        </label>
        <label className="input-group ">
          <input
            type="email"
            name="email"
            required
            placeholder="Enter Your Email"
            className="input input-bordered"
          />
          <button onClick={handleEmail} className='btn'>Submit</button>
        </label>
      </div>
    </form>
  );
};

export default Newsletter;