import axios from "axios";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";

const FeaturedBlogs = () => {
  const columns = [
    "Title",
    "Owner Name",
    {
      name: "Image", // Replace with the actual property name containing the image URL
      options: {
        customBodyRender: (value, tableMeta, updateValue) => (
          <img
            src={value}
            alt="Avatar"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        ),
      },
    },
  ];

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://assignment-11-server-nine-psi.vercel.app/featuredBlog")
      .then((data) => {
        setBlogs(data.data);
      });
  }, []);
  console.log(blogs);
  const data = blogs.map((blog) => {
    let arr = [];
    const { title, ownerImage, ownerName } = blog;
    arr.push(title, ownerName, ownerImage);
    return arr;
  });

  return (
    <div>
      <MUIDataTable title={"Daily News"} data={data} columns={columns} />;
    </div>
  );
};

export default FeaturedBlogs;
