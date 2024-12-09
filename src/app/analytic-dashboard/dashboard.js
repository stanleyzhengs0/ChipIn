import React from 'react'
import SignOutButton from "../components/SignOutButton"


const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* <!-- Page content goes here --> */}
      <div className="flex justify-center">
        <div className='py-10'>
          <SignOutButton />
        </div>
        
        
      </div>

      {/* <!-- Search Bar --> */}
      <div className="fixed bottom-4 left-0 right-0 p-10 ">
        <div className="max-w-lg mx-auto flex items-center space-x-2">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
          <button className="p-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none">
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
