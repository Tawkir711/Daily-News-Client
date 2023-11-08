import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const RecentBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/blogs')
      .then(res => res.json())
    .then(data => setBlogs(data))
  }, [])
  // console.log(blogs);
  return (
    <div className="my-8 bg-base-100">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Recent Blog & Posts Section</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;