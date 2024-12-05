import { signOut } from "next-auth/react"

export const handleSignOut = async () =>{
    try{
        await signOut()
    }catch(error){
        console.log(error)
    }
}