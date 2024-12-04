import { google } from "googleapis";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../lib/auth";

export async function GET(req){
    // const driveActivity = google.driveactivity({version: 'v2'})
    // const drive = google.drive({verison: 'v3', authOptions})

    
 

    return NextResponse.json({'s': session})
}