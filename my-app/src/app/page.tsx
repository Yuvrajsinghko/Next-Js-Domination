import Link from "next/link";
import React from "react";

const Home = () => {
  return <div>
    <Link href='/about'>About</Link>
    <br />
    <Link href='/portfolio'>Portfolio</Link>
  </div>;
};

export default Home;
