import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Details from "../Components/Details/Details";
import { Helmet } from "react-helmet";

const AllBlogs = () => {
  // const blogs = useLoaderData();
  // console.log(blogs);
  // const { title, photo, category, shortDes } = blogs;
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("https://assignment-11-server-nine-psi.vercel.app/allBlog")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  console.log(blog);
  return (
    <div className="my-4 bg-base-100">
      <Helmet>
        <title>Daily News / All Blogs</title>
      </Helmet>
      <div className="text-center">
        <h3 className="text-2xl font-semibold">All Blog Page</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
        {blog.map((bog) => (
          <Details bog={bog} key={bog._id}></Details>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
