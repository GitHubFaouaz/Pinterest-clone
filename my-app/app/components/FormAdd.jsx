"use client"

import { useState } from "react";
import UploadImage from "./UploadImage"
import { useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
import UserTag from "./UserTag";




export default function FormAdd() {
    
  const {data:session} = useSession();
  const [titlePost,setTitle] = useState();
  const [descPost,setDesc] = useState();
  const [linkPost,setLink] = useState();
  const [fileImage,setFileImage] = useState();
  const [loading,setLoading] = useState(false);
  
  const router = useRouter()
  const data = Date.now().toString()

  const onSave = async () => {
    setLoading(true); // Active l'état de chargement

    const formData = new FormData();
    formData.append('title', titlePost);
    formData.append('desc', descPost);
    formData.append('link', linkPost);
    formData.append('image', fileImage);
    formData.append('userName', session.user.name);
    formData.append('userEmail', session.user.email);
    formData.append('userImage', session.user.image);

    // Appel à l'API backend pour sauvegarder la publication
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: formData,
      });

      // if (response.ok) {
      //   console.log('Données enregistrées avec succès');
      // } else {
      //   console.log('Erreur lors de l\'enregistrement');
      // }
      if (!response.ok) {
        const errorData = await response.json(); // Lit la réponse JSON du serveur
        console.log('Erreur lors de l\'enregistrement :', errorData); // Affiche les détails de l'erreur
      }
    
    } catch (error) {
      console.error('Erreur', error);
    } finally {
      setLoading(false); // Désactive l'état de chargement
    }
  }

  return (
    <div className="bg-white p-16 rounded-2xl">
     <div className="flex justify-end md-6">
      <button onClick={()=> onSave()}  className="bg-red-500 p-2 text-white px-3 font-semibold rounded-lg">
        {loading? 
        <div className="inset-0 flex items-center justify-center">
          <div className="h-6 w-6 border-t-2 border-b-2 border-red-900 rounded-full animate-spin"></div>
        </div> : <span>publier</span>}
      </button>
     </div>
     <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
      <UploadImage setFile={(file)=> setFileImage(file)}/>{/* on recupère les images du props setFile */} 
        <div className="col-span-2">
          <div className="w-[100%]">
            <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="Ajouter un titre" className="text-[35px] outline-none font-bold w-full border-b-[2px] border-gray-400 placeholder-gray-400" />
            <h2 className="text-[12px] text-gray-400 w-full wb-8"> Les premiers 40 caractères sont ce qui apparaissent dans le flux </h2>
            <UserTag  user={session?.user}/>
            <textarea onChange={(e)=> setDesc(e.target.value)} placeholder="Ajouter une description"  className="w-full pb-4 mt-8 outline-none text-[14px] border-gray-400 border-b-[2px] placeholder-gray-400" cols={30}></textarea>
            <input onChange={(e)=> setLink(e.target.value)} placeholder="Ajouter un lien"  type="text" className="outline-none w-full placeholder-gray-400 pb-4 mt-[90px] border-b-[2px] border-gray-400" />
          </div>
        </div>
     </div>
    </div>
  )
}
