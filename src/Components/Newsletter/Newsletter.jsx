import React from 'react';

const Newsletter = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    console.log(email);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control mx-auto w-4/12 my-10">
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
          <input
            type="submit"
            value="Submit"
            className="
          btn btn-ghost"
          />
        </label>
      </div>
    </form>
  );
};

export default Newsletter;