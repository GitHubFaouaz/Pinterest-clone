"use client"

import { useState } from "react";
import UploadImage from "./UploadImage"
import { useSession } from 'next-auth/react';
import { useRouter } from "next/router";
export default function FormAdd() {
    
  const {data:session} = useSession();
  const [title,setTitle] = useState();
  const [desc,setDesc] = useState();
  const [link,setLink] = useState();
  const [file,setFile] = useState();
  const [loading,setLoading] = useState(false);
  
  const router = useRouter()
  const data = Date.now().toString()
   
  const onSave = ()=> {
    setLoading(true)
    uploadFile()
  }
  const uploadFile = ()=> {
  const postData  = {
      title : title,
      desc : desc ,
      link  : link , 
      image: url ,
      userName : session.user.name,
      userEmail : session.user.email,
      userImage : session.user.image
      // id : id 
  }
  }
  return (
    <div>
        <UploadImage/>
    </div>
  )
}
