"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React from 'react'

export default function UserInfo({userInfo ,session}) {

  console.log('userInfo' ,  userInfo);
  const router = useRouter();

  const onLogOut = ()=> {
   signOut()
   router.push('/') // apres la deconnexion on envoi a la page d'acceuil 
  }
  return (
    <div className="bg-white flex flex-col items-center p-16 rounded-2xl shadow-md">
      <Image alt='imageProfile'  src={userInfo.image} width={100} height={100} className='rounded-full'/>
      <h2 className='text-[30px] font-semibold'>{userInfo.name}</h2>
      <div className="flex gap-4">
        <button className="rounded-full p-2 px-3 mt-5 font-semibold bg-grey-200">Partager</button>
        {session?.user.email == userInfo.email ? 
          <button className="rounded-full p-2 px-3 mt-5 font-semibold bg-grey-200"onClick={()=> onLogOut()}>Deconnexion</button>
         : null } 
    
      </div>
      </div>
    )
  }
