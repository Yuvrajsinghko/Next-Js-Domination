import React from 'react'

const Users = async ({params}:{params:{userid:string}}) => {
  const {userid} =await params;
  return (
    <div>Main Users id no:{userid}</div>
  )
}

export default Users