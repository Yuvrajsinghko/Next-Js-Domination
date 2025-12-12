import React from "react";

const Prod = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  console.log(slug);
  return (
    <div>
      <h1>Dynamic ROot Catching all the routes </h1>
      {/* {slug.map((idx,p)=>{
        <ul>
            <li key={idx}>{p}</li>
        </ul>

      })} */}
    </div>
  );
};

export default Prod;
