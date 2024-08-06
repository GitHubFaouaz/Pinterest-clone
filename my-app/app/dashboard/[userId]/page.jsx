"use client"

import {doc,getDoc,getFirestore,setDoc} from 'firebase/firestore';
import { useEffect, useState } from "react"
import app from '../../db/firebaseConfig'
// import app from '@/app/db/firebaseConfig'
import UserInfo from '../../components/UserInfo';
import { useSession } from 'next-auth/react';




export default function page({params}) {

  const session = useSession();
  // const { status, user} = session ;
  console.log( 'session' , session);
  const {user} = session; 
  console.log(user);
  console.log(session.data);
//  if(status === 'authenticated') {
//   // console.log(session.user);
// //  return <p>Signed in as {session.user.email}</p>
//  }

 
  const db = getFirestore(app);
  const [userInfo, setUserInfo] = useState('');

  const getUserInfo = async (email) => {
    const docRef = doc(db, "user", email); // Cherche le mail dans la collection "user" de la base de données
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      setUserInfo(userData);
    } else {
      console.log("Aucune information trouvée.");
    }
}

useEffect(()=>{
if(params){
  const email = params.userId.replace("%40", "@");
  getUserInfo(email);
}
},[params])


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
//  l'adresse e-mail faouazaaa@gmail.com sera encodée comme faouazaaa%40gmail.com dans l'URL.
// Après le remplacement, faouazaaa%40gmail.com devient faouazaaa@gmail.com
