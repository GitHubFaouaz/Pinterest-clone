"use client"

import {doc,getDoc,getFirestore,setDoc} from 'firebase/firestore';
import { useEffect, useState } from "react"
import app from '../../db/firebaseConfig'
import UserInfo from '../../components/UserInfo';




export default function page({params}) {

const db = getFirestore(app)
const [userInfo,setUserInfo] = useState(null)

useEffect(()=>{
if(params){
    getUserInfo(params.userId.replace("%40" ,"@"))
    // on remplace %40 qui n'est pas prit en compte par @ du mail http://localhost:3000/dashboard/faouazaaa@gmail.com

}
},[params])

 const getUserInfo = async (email)=> {
    const docRef =(db,"user", email) // on cherché le mail dans le user de la base de donnée
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
      const userData = docSnap.data()
      setUserInfo(userData)
    }else {
      console.log("aucune information");
    }
  }

  return (
    <div className="bg-[#e9e9e9]  min-h-screen flex items-center justify-center">
    {userInfo?(
    <div>
      <UserInfo userInfo = {userInfo}/>
    </div>
    ) : null}
    </div>
  )
}
// params pour recuperer le mail dans d'url