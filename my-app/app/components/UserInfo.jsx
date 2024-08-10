import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router'
import React from 'react'

export default function UserInfo({userInfo}) {

  console.log('userInfo' ,  userInfo);
  // const {data:session} = useSession();
 const {user} = userInfo ;
  // const router = useRouter();
  const onLogOut = ()=> {
   signOut()
  //  router.push('/') // apres la deconnexion on envoi a la page d'acceuil 
  }
  return (
    <div className="bg-white flex flex-col items-center p-16 rounded-2xl shadow-md">
      <Image alt='imageProfile'  src={user.image} width={100} height={100} className='rounded-full'/>
    </div>
  )
}
