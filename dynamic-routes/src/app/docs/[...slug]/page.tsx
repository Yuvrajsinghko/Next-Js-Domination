import React from "react";

const CatchAll = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const { slug } = await params;
  return (
    <div>
      <h1>Showing URL:{slug[0]}</h1>
    </div>
  );
};

export default CatchAll;
