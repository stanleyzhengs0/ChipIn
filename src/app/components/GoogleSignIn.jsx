'use client'
import { signIn } from "next-auth/react"

const GoogleSignIn = () => {
    const handleOnClick = () =>{
        signIn("google")
    }
  return (
    <div>
        <button
            onClick={handleOnClick}
            className = 'bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600'
        >
            Sign in with google
        </button>
      
    </div>
  )
}

export default GoogleSignIn
