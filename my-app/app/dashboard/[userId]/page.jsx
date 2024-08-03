"use client"

import {doc,getFirestore,setDoc} from 'firebase/firestore';
import { useEffect, useState } from "react"
import app from '../../db/firebaseConfig'
import UserInfo from '../../components/UserInfo';




export default function page({params}) {

const db = getFirestore(app)
const [useInfo,setUseInfo] = useState(null)

useEffect(()=>{

},[params])

  return (
    <div>ll</div>
  )
}
