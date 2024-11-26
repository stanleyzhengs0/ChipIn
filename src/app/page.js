// 'use client'
// import Image from "next/image";
// import { useRef, useState } from "react";

// export default function Home() {

//   const [variable, setVariable] = useState('')
//   const input = useRef(null)

//   return (

//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <div className="border-2">
//         <input
//           className="p-1"
//           placeholder="Enter URL"
//           ref ={input}
//         />
//         <button
//           className="border-2 p-1"
//           onClick={() => {setVariable(input.current.value)}}
//         > 
//           search
//         </button>
        
//       </div> 
//       {variable}

//     </div>
//   );
// }

'use client';

import {signIn} from 'next-auth/react'
import GoogleSignIn from './components/GoogleSignIn';


export default function Home() {

  const handleGoogleSignIn = () => {
    signIn('google');
  };

  return (
    <div className= "flex bg-cover bg-center min-h-screen bg-[url('https://static.vecteezy.com/system/resources/previews/007/069/878/large_2x/top-view-of-group-of-multiethnic-busy-people-working-in-an-office-aerial-view-with-businessman-and-businesswoman-sitting-around-a-conference-table-with-copy-space-business-meeting-concept-photo.jpg')]">
      {/* Left Empty */}
      <div className = "w-1/2"></div>
      {/* Right Content */}
      <div className = 'flex flex-col items-center justify-center w-1/2 pr-16'>
      <h1 className='pb-6 text-3xl font-bold text-center'> Chip-In needs your permission to access your team's collaborative documents!</h1>
      <p className='pb-6 text-center'>Sign in with Google to continue:</p>
     <GoogleSignIn/>
      </div>
    </div>
  );

}
