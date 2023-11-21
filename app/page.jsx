"use client"
import { useEffect, useState } from "react";
import QouteCardList from "@components/QouteCardList";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("api/qoute");
      let data = await response.json();
      setPosts(data);
    };
    fetchPost();
  }, []);

    return (
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Discover and Share
        <br className="max-md:hidden" />
        <span className="green_gradient text-center">
          ANIME QOUTES YOU LIKE !!</span></h1>
        <p className="desc text-center"> QoutesShare is an social
         media specially made for sharing,
         posting or even create anime qoutes.</p>
         <section className="feed">
      <QouteCardList data = {posts} handleTagClick={() => {}} />
    </section>
      </section>
     
    );
  };
  
  export default Home