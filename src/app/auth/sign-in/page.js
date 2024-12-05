import { SignInPage } from "../../auth/sign-in/signin"
import { checkIsAuthenticated } from "../../lib/auth/checkIsAuthenticated"
import { redirect } from 'next/navigation'

const SignIn = async () => {

    const isAuthenticated = await checkIsAuthenticated()
    
    if(isAuthenticated){
        redirect("../../../analytic-dashboard")
    }else{
        return <SignInPage/>
    }
}

export default SignIn;

