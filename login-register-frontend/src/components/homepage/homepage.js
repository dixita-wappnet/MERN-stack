import React from 'react'
import "./homepage.css"

export default function Homepage({loginUser, setLoginUser}) {
  return (
    <div className='homepage'>
      <h1>Hello, {loginUser.name}  </h1>
      <br/>
      <p> Welcome {loginUser.email}</p>
      <br/>
      <div className='button' onClick={() => setLoginUser({})}>Logout</div>
    </div>
  )
}
