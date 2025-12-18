import { redirect } from 'next/navigation'
import React from 'react'

const oldPage = () => {
    redirect('/newPage')
  return (
    <div><h2>Old Page</h2></div>
  )
}

export default oldPage