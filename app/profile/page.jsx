"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile.jsx";

const MyProfile = () => {
    const {data :session} = useSession();
    const[posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
          const response = await fetch(`/api/users/${session.user.id}/posts`);
          const data = await response.json();
          setPosts(data);
        };
        
       if(session?.user.id){fetchPost();} 
      }, []);
  const handleEdit = () => {};
  const handleDelete = async () => {};

  return (
    <div>
      <Profile
        name="My"
        desc="Welcome to your personalized Profile page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default MyProfile;
