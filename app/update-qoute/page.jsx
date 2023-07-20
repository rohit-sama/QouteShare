"use client"
import { useEffect, useState } from 'react';
import { useRouter,useSearchParams } from 'next/navigation';
import Form from '@components/Form';


const EditQoute = () => {
const router = useRouter();
const searchParams = useSearchParams();
const qouteId = searchParams.get('id');



const [submitting, setSubmitting] = useState(false);
const [post, setPost] = useState({
    qoute: "",
    image: "",
    tag: "",
})

useEffect (() =>{
   const  getqouteDetails = async () => {
        const response = await fetch(`api/qoute/${qouteId}`)
        const data = await response.json();

        setPost({
            qoute:data.qoute,
            image:data.image,
            tag:data.tag,

        })
    }
    if(qouteId) getqouteDetails();

},[qouteId])

const UpdateQoute = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if(!qouteId) return alert("qoute id not found")


    try {
      const response = await fetch(`/api/qoute/${qouteId}`,{
        method: "PATCH",
        body:JSON.stringify({
          qoute: post.qoute,
          image: post.image,
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
     type= "Edit"
     post = {post}
     setPost = {setPost}
     submitting = {submitting}
     handleSubmit = {UpdateQoute}
     />
  )
}

export default EditQoute;