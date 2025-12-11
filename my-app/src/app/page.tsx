"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router= useRouter();
  console.log(router);
  
  return (
    <div>
      <h1>Welcome to home page</h1>
    </div>
  );
};

export default Home;
