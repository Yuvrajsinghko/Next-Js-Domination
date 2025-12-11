"use client"
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const ro=useRouter()
  const nt = (pag:string)=>{
    ro.push(`${pag}`)
  }
  return (
    <div>
      <h1>Welcome to home page</h1>
      <button onClick={()=>nt("page1")}>For main content</button>
    </div>
  );
};

export default Home;
