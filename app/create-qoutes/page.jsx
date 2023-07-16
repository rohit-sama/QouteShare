"use client"
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Form from '@components/Form';

const CreateQoute = () => {
const [submitting, setSubmitting] = useState(false);
const [post, setPost] = useState({
    qoute: "",
    tag: "",
})

const createQoute = async (e) => {
    
}

  return (
    <Form
     type= "Create"
     post = {post}
     setPost = {setPost}
     submitting = {submitting}
     handleSubmit = { CreateQoute}
     />
  )
}

export default CreateQoute;