 "use client"
import React, { useEffect } from 'react'
//recuperation des données et creation dun compte dans la db 
import {doc,getFirestore,setDoc} from 'firebase/firestore';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import app from '../db/firebaseConfig';
import Image from 'next/image';
import Logo from '../../public/Logo.svg';
import { IoIosArrowDown, IoIosNotifications, IoIosSearch } from 'react-icons/io';
import { FaRegUserCircle } from 'react-icons/fa';


export default function Header() {

    const {data:session} = useSession();
    const router = useRouter();
    const db =  getFirestore(app)
    console.log("envId", process.env.GOOGLE_CLIENT_ID);
    console.log("envSecret",process.env.GOOGLE_CLIENT_SECRET,);
    console.log("envTest",process.env.test);


    //  useEffect(()=>{
    // //    saveUserInfo()
    //  },[session])

    //  const saveUserInfo = async ()=> {
    //      // si seesion ets true et qu'on a un user 
    //     if(session && session.user && session.user.email){
    //       //on va push les données dans la db 
    //       await setDoc(doc(db,"user" ,session.user.email),{
    //         username: session.user.name,
    //         userEmail : session.user.email,
    //         userImage : session.user.image
    //       })
    //     }
            
    //  }

  return (
    <div className="flex items-center p-5 gap-5">
    <button onClick={()=> router.push('/')} className="flex items-center gap-5">
     <Image src={Logo} alt='Logo pinterest' className='w-10 h-10 p-1 hover:bg-[#f1f1f1] hover:shadow-md rounded-full' />
     
     <span className='font-bold text[#cb1f27] md:text-xl'>Pinterest</span>
    </button>
    <button className="bg-gray-200 hover:bg-grey-300 font-samibold gap-2 p-3 transition-all flex items-center text-black rounded-full">
      <span>Explorer</span>
      <span><IoIosArrowDown/></span>
    </button>

    <div className="flex gap-4 flex-grow items-center">
      <div className="flex items-center p-3 gap-3 w-full rounded-full transition-all md:hover:bg-gray-200 ">
        <IoIosSearch className='text-3xl text-gray-500 cursor-pointer'/>
        <input type="text" className="hidden border-none outline-none md:flex bg-transparent w-full" />
      </div>
      
      <button className="rounded-full bg-gray-200 p-3 font-semibold hover:bg-gray-300 transition-all">
        <IoIosNotifications/>
      </button>

      {session?.user ? (
        <div className="flex items-center gap-3">
          <button>
            <Image width={40} height={40}    src={session.user.image ?? '/default-profile.png' }alt='image profil'/>
          </button>
          <button className="text-sm text-white bg-[#cb1f27] rounded-full hover:bg-red-900"></button>
        </div>
      ) :(
        <button onClick={()=> signIn()} className="bg-[#cb1f27] rounded-full p-3 transition-all font-semibold hover:bg-red-900 text-white">
          <FaRegUserCircle/>
        </button>
      )}
    </div>
    </div>
  )
}
