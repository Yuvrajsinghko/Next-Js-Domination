import Link from "next/link";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    const arl=["Technology", "Design", "Business"]
  return (
    <div>
      <nav className="h-[2.5vw] w-screen bg-amber-500 text-3xl flex justify-center gap-4 items-center">
        <Link href="/main/home">Home</Link>
        <Link href="/main/about">About</Link>
      </nav>
      <div className="h-auto w-auto bg-teal-500 text-black font-bold text-5xl p-6">
        <ul>
          {arl.map((elm,idx)=>(<li key={idx}>{elm}</li>))}
        </ul>
      </div>
      <div className="text-5xl text-teal-600 font-extrabold">
        {children}
      </div>
      <footer className="h-[30vw] w-auto text-6xl text-amber-200 font-extrabold flex justify-center items-end">
        <h1>Copy Right Rights reserved 2025</h1>
      </footer>
      
    </div>
  );
};

export default Layout;
