'use client'
import React from 'react'
import {handleSignOut} from "../lib/auth/signOutServerAction"

const SignOutButton = () => {
  return (
    <button
        className='bg-gray-300 rounded-lg'
        onClick={handleSignOut}
    >
        Sign Out
    </button>
  )
}

export default SignOutButton
