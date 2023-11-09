import React, { useRef } from 'react';
import Swal from 'sweetalert2';

const Newsletter = () => {
  const ref = useRef();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    console.log(email);
  }
   
  const handleEmail = () => {
    Swal.fire({
      icon: "success",
      title: "Congratulations",
      text: "Thank you for subscribing to our newsletter "
    });
    ref.current.reset();
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-row-reverse'>
        <div className="form-control mx-auto md:flex-1 my-10 px-3 ">
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
            <button ref={ref} onClick={handleEmail} className="btn">
              Submit
            </button>
          </label>
        </div>
        <div className='flex-1'>
          <img className='h-[300px]'
            src="https://i.postimg.cc/rFrZh95S/Ro-I-newsletter-image.jpg"
            alt=""
          />
        </div>
      </div>
    </form>
  );
};

export default Newsletter;