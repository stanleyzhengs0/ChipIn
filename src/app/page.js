'use client'
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {

  const [variable, setVariable] = useState('')
  const input = useRef(null)

  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="border-2">
        <input
          className="p-1"
          placeholder="Enter URL"
          ref ={input}
        />
        <button
          className="border-2 p-1"
          onClick={() => {setVariable(input.current.value)}}
        > 
          search
        </button>
        
      </div> 
      {variable}

    </div>
  );
}
