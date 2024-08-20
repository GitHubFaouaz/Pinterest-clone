"use client"

import { useState } from "react";
import UploadImage from "./UploadImage"
import { useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
export default function FormAdd() {
    
  const {data:session} = useSession();
  const [titlePost,setTitle] = useState();
  const [descPost,setDesc] = useState();
  const [linkPost,setLink] = useState();
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
      title : titlePost,
      desc : descPost ,
      link  : linkPost , 
      image: urlPost ,
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
          <div className="h-6 w-6 border-t-2 border-b-2 border-red-900 rounded-full animate-spin"></div>
        </div> : <span>publier</span>}
      </button>
     </div>
     <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
      <UploadImage setFile={(file)=> setFile(file)}/>
        <div className="col-span-2">
          <div className="w-[100%]">
            <input type="text" onChange={(e)=>setTitle( e.target.value)} placeholder="Ajouter un titre" className="text-[35px] outline-none font-bold w-ful border-b-[2px] border-gray-400 placehorder-gray-400" />
            <h2 className="text-[12px] text-gray-400 w-full wb-8"> Les premiers 40 caractères sont ce qui apparaissent dans le flux </h2>
          </div>
        </div>
     </div>
    </div>
  )
}
