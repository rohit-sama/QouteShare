"use client"
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@components/Form';


const CreateQoute = () => {
const router = useRouter();
const {data : session} = useSession();


const [submitting, setSubmitting] = useState(false);
const [post, setPost] = useState({
    qoute: "",
    image: "",
    tag: "",
})

const createQoute = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/qoute/new',{
        method: "POST",
        body:JSON.stringify({
          qoute: post.qoute,
          image: post.image,
          userId: session?.user.id,
          tag:post.tag
        })
      })

      if(response.ok){
        router.push("/") 
      }
    } catch (error) {
      console.log(error);
    }finally{
      setSubmitting(false);
    }
}

  return (
    <Form
     type= "Create"
     post = {post}
     setPost = {setPost}
     submitting = {submitting}
     handleSubmit = {createQoute}
     />
  )
}

export default CreateQoute;