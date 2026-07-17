import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="container">
        <button
          id="signup-btn"
          onClick={() => {
            navigate('/signup')
          }}
        >
          SignUp
        </button>

        <button
          id="login-btn"
          onClick={() => {
            navigate('/login')
          }}
        >
          Login
        </button>
      </div>
    </>
  )
}

export default Homepage