"use client"

import React from "react";
import { useState, useEffect } from "react";
import QouteCard from "./QouteCard.jsx";


const QouteCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <QouteCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("api/qoute");
      const data = await response.json();
      setPosts(data);
    };
    
    fetchPost();
  }, [posts]);

  return (
    <section className="feed">
      <QouteCardList data = {posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
