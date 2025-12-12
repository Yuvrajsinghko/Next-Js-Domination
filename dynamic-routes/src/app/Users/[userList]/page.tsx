import React from "react";

const userList = async ({ params }: { params: { userList: string } }) => {
  const { userList } = await params;
  console.log(userList)
  return <div>Information about {userList}</div>;
};

export default userList;
