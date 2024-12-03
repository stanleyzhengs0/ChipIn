import { google } from "googleapis";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

export async function GET(req){
    // const driveActivity = google.driveactivity({version: 'v2'})
    const session =  getSession({req})

    // Access the accessToken from the session
  const accessToken = session.accessToken;  // or session.user.accessToken if it's nested

  try {
    // Use the accessToken to call the Google Drive Activity API
    const response = await fetch('https://www.googleapis.com/drive/v2/activity', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch activity data');
    }

    // Get the response data
    const data = await response.json();
    
 

    return NextResponse.json({'s': data})

    } catch (error) {
        return NextResponse.json({'s': 'wrong'})
    }
}