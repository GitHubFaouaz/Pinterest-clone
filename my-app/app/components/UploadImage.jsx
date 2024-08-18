import React, { useState } from 'react'

export default function UploadImage() {
  const [selectFile,setSelectFile] =useState(null)
  return (
    <div className='h-[450px] bg-[e9e9e9] rounded-lg'>
      <label htmlFor="" className="m-5 flex flex-col justify-center items-center cursor-pointer h-[90%] border-[2px] border-grey-200 border-dashed rounded-lg text-grey-600">
        {!selectFile? () : null}
      </label>
    </div>
  )
}
