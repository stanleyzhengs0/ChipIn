'use client';
import {useSession, signOut} from 'next-auth/react'
import RedirectToSignIn from './components/RedirectToSignIn';

export default function Home() {

  const {data: session} = useSession()
  

  return (
    <>
 
        <div className= "flex bg-cover bg-center min-h-screen bg-[url('https://static.vecteezy.com/system/resources/previews/007/069/878/large_2x/top-view-of-group-of-multiethnic-busy-people-working-in-an-office-aerial-view-with-businessman-and-businesswoman-sitting-around-a-conference-table-with-copy-space-business-meeting-concept-photo.jpg')]">
          {/* Left Empty */}
          <div className = "w-1/2"></div>
          {/* Right Content */}
          <div className = 'flex flex-col items-center justify-center w-1/2 pr-16'>
          <h1 className='pb-6 text-3xl font-bold text-center'> Chip-In needs your permission to access your team's collaborative documents!</h1>
          <p className='pb-6 text-center'>Sign in with Google to continue:</p>
            <RedirectToSignIn/>
          </div>
        </div>
      
   
    </>

    
  );

}