'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Product from "./product/page";
import { useRouter, redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router= useRouter();
  const checkUser =  () => {
    const res= localStorage.getItem("token");
    const token = JSON.parse(res);
    console.log(token);
    if (token === null){
      redirect('/signup/login')
    }
    else {
      redirect('/product')
    }
  };
  useEffect (() => {
    checkUser();
  // router.replace('/signup/login');
  }, [])
  return (
   <></>
    // <div className={styles.parent}>
    //   <Pro<>duct />
    // </div>
  
  );
}
