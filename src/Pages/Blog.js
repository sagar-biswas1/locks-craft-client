import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../Components/BlogComponent/BlogCard";
import Footer from "../Components/Footer/Footer";
const Blog = () => {
  const [allPost, setAllPost] = useState([]);

  const contentKey = "358a24520b048a7e4c64119034";
  const url = "https://oshan.xyz/";

  useEffect(() => {
    axios
      .get(`${url}/ghost/api/v3/content/posts/?key=${contentKey}`)
      .then(function (response) {
        setAllPost(response.data.posts);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  console.log(allPost);
  return (
    <div>
      <div className="container mb-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-4 mb-4 g-4 mb-5">
          {allPost.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
