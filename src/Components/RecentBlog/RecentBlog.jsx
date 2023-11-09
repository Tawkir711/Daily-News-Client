import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import {motion} from 'framer-motion'

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
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 4 }}
      >
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog}></BlogCard>
        ))}
      </motion.div>
    </div>
  );
};

export default RecentBlog;