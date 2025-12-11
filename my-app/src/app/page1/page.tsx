"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Main = () => {
  const router = useRouter();
  const navi = (page: string) => {
    router.push(`${page}`);
  };
  return (
    <div>
      <h1>Main Content</h1>
      <button onClick={() => navi("page2")}>For Secondary Content</button>
    </div>
  );
};

export default Main;
