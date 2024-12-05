'use client'
import { useRouter } from "next/navigation"

const RedirectToSignIn = () => {
    const router = useRouter()
  return (
    <div>
        <button
            onClick={()=>{router.push('./auth/sign-in ')}}
            className = 'bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600'
        >
            Sign in with google
        </button>
      
    </div>
  )
}

export default RedirectToSignIn
