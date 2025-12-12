import React from "react";

const userList = async ({ params }: { params: { userList: string } }) => {
  console.log(params)
  const { userList } =  params;
  console.log(userList)
  return <div>Information about {userList}</div>;
};

export default userList;
