import React from 'react'
import SignOutButton from "../components/SignOutButton"


const DashboardPage = () => {
  return (
    <div
        className='flex justify-between p-4'
    >
      Dashboard
      <SignOutButton/>
    </div>
  )
}

export default DashboardPage
