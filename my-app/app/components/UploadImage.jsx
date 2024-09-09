import React, { useEffect, useState } from 'react'
import { IoArrowUpCircleOutline } from "react-icons/io5";

//On recupère l'image apres telechargerment     
export default function UploadImage({setFile}) {
  const [selectFile,setSelectFile] =useState()
  // console.log('image' , selectFile);
  
  
  // useEffect(() => {
  //   return () => {
  //     if (selectFile) {
  //       // onlibère createObjectURL en appelant URL.revokeObjectURL(url) une fois que l'URL n'est plus nécessaire.
  //       URL.revokeObjectURL(selectFile);
  //     }
  //   };
  // }, [selectFile]);
  return (
    <div className='h-[450px] bg-[e9e9e9] rounded-lg'>
      <label htmlFor="" className="m-5 flex flex-col justify-center items-center cursor-pointer h-[90%] border-[2px] border-grey-200 border-dashed rounded-lg text-grey-600 relative">
          {!selectFile ? (
          <div className='flex flex-col items-center'>
            <IoArrowUpCircleOutline className='text-[22px]' />
            <h2 className='font-semibold'>Cliquer pour télécharger</h2>
          </div>
        ) : (
          <img src={URL.createObjectURL(selectFile)} alt='selected' className='object-contain h-[90%]' height={500} width={500} />
        )}
        <input
          type="file"
          id="dropzone-file"
          className="opacity-0 absolute top-[45%] left-[92px] pointer w-4 h-4 rounded-full"
          onChange={(e) => {
            const file = e.target.files[0];
            setSelectFile(file);
            setFile(file); // Met à jour le fichier dans le parent pour l'envoyer au composant FormAdd via props 
          }}/>
      </label>
    </div>
  )
}

// window.URL.createObjectURL(selectFile) :

// Cette méthode génère une URL temporaire pour l'objet File (l'image sélectionnée). Cette URL est ensuite utilisée dans l'attribut src de la balise <img> pour afficher un aperçu de l'image sélectionnée avant qu'elle ne soit réellement téléchargée.

// Vous utilisez simplement setFile comme une prop sans créer de useState supplémentaire.