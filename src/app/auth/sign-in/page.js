import { redirect } from "next/navigation";
import { SignInPage } from "           /auth/sign-in/signin"

const SignIn = async () => {
    // const isAuthenticated = await checkIsAuthenticated()
    const isAuthenticated = false;

    if(isAuthenticated){
        redirect("/dashboard")
    }else{
        return <SignInPage/>
    }
  
}

export default SignIn;