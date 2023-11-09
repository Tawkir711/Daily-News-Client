import axios from 'axios';
import MUIDataTable from 'mui-datatables';
import React, { useEffect, useState } from 'react';

const FeaturedBlogs = () => {
  const columns = ["Title", "Owner Name", "Owner Image"];

  
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/featuredBlog")
      .then((data) => {
      setBlogs(data.data);
    });
  }, []);
  console.log(blogs);
  const data = blogs.map(blog => {
    let arr = [];
    const { title, ownerImage, ownerName} = blog;
    arr.push(title, ownerName, ownerImage);
    return arr;
  })
  
  
  return (
    <div>
      <MUIDataTable
        title={"Daily News"}
        data={data}
        columns={columns}
        
      />
      ;
    </div>
  );
};

export default FeaturedBlogs;