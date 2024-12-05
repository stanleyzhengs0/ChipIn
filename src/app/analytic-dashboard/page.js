import React from 'react'
import DashboardPage from "./dashboard"
import { checkIsAuthenticated } from '../lib/auth/checkIsAuthenticated'
import { redirect } from 'next/navigation'



const Dashboard = async () =>{
  
  const isAuthenticated = await checkIsAuthenticated()
  
  if(!isAuthenticated){
    redirect("/")
  }else{
    return <DashboardPage/>
  }

  
}

export default Dashboard

