import { NextResponse } from "next/server";


export async function GET(req){
    // const diveactivity = google.activity.query({
    //     'pageSize': 10,
    //   });

    // const client = new google.auth.OAuth2(       
    //     process.env.GOOGLE_CLIENT_ID,
    //     process.env.GOOGLE_CLIENT_SECRET,
    // );
    // const cookies = await auth()
    
    // console.log("auth", cookies.cookies )  
    
    

    const diveactivity = 'hellow world'
    return NextResponse.json({'s': session})
}