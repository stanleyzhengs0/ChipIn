import { NextResponse } from "next/server";
import { auth } from "../../lib/auth/authConfig"
import { google } from "googleapis";



export async function GET(req) {
    try {
        const session = await auth()

        

        if (!session) {
            return NextResponse.json({ error: "Unauthorized, no access token found" }, { status: 401 });
        }
 
        // Set up OAuth2 client with the user's access token
        const oauth2Client = new google.auth.OAuth2(session);

        oauth2Client.setCredentials({
            access_token: session,  // Use the access token you received after OAuth
            refresh_token: session,  // Optional, use to refresh tokens when expired
          });
       
        const drive = google.drive({version: 'v3', auth: oauth2Client});

        const response = await drive.files.get({
            fileId: '11Sl4uMRcKUnx649iVjsUYgDP0zkdJGVrNJXD3VVRgZ8',
            
        })


      

        // Return the API response
        return NextResponse.json({ response: res });

    } catch (error) {
        console.error("Error fetching Drive Activity:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
