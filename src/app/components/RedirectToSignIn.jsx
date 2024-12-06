'use client'
import { useRouter } from "next/navigation"

const RedirectToSignIn = () => {
    const router = useRouter()
  return (
    <div>
        <button
            onClick={()=>{router.push('./auth/sign-in ')}}
            className="all-[unset] box-border inline-flex h-[60px] items-center justify-center gap-2.5 px-10 py-4 relative flex-[0_0_auto] bg-[#c35439] rounded-lg"
        >
            Log In
        </button>
      
    </div>
  )
}

export default RedirectToSignIn
