"use client"

import { useState } from "react";
import UploadImage from "./UploadImage"
import { useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
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
    
    <div className="bg-white p-16 rounded-2xl">
     <div className="flex justify-end md-6">
      <button className="bg-red-500 p-2 text-white px-3 font-semibold rounded-lg">
        {loading? 
        <div className="inset-0 flex items-center justify-center">
          <div className="h-6 w-6 border-t-2 border-b-2 border-red-900 rounded-full"></div>
        </div> : <span>publier</span>}
      </button>
     </div>
    </div>
  )
}
