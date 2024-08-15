"use client"

import {doc,getDoc,getFirestore,setDoc} from 'firebase/firestore';
import { useEffect, useState } from "react"
// import app from '@/app/db/firebaseConfig'
import UserInfo from '../../components/UserInfo';
import { useSession } from 'next-auth/react';

// params pour recuperer le mail dans d'url
//  l'adresse e-mail faouazaaa@gmail.com sera encodée comme faouazaaa%40gmail.com dans l'URL.
// Après le remplacement, faouazaaa%40gmail.com devient faouazaaa@gmail.com

export default async  function Page() {
  const { data: session, status } = useSession();
  const [userInfo, setUserInfo] = useState(null);

  useEffect  (() => {
    if (status === "authenticated" && session) {
      // Vous pouvez également enregistrer l'utilisateur dans l'état local si nécessaire
      setUserInfo(session.user);
    }
  }, [status, session]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'authenticated' && userInfo) {
    return (
      <div>
        <UserInfo userInfo={userInfo} session={session}/>
      </div>
    );
  }
  
  return <p>Not signed in</p>;
}
  
