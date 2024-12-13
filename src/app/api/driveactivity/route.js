import { NextResponse } from "next/server";
import { auth } from "../../lib/auth/authConfig"

export async function GET(req) {
    try {
        const session = await auth()

        if (!session) {
            return NextResponse.json({ error: "Unauthorized, no access token found" }, { status: 401 });
        }
 
        const response = await fetch("https://driveactivity.googleapis.com/v2/activity:query", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${session.accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              itemName: `items/1UnFB5TQ15G4Z5yj6Yhz83MTXQ9tHqFy0zuOK8GDNogM`,
            }),
          }).then((res) => res.json());


        const r = await fetch("https://people.googleapis.com/v1/people/108657382841632670101?personFields=names,emailAddresses",{
          method: "GET",
          headers:{
            "Authorization": `Bearer ${session.accessToken}`,
          }
        })
          

        //TESTING DRIVE CONNECTION WITH SAMPLE TASK
        // const response =  driveactivity.activity.query({
        //     'itemsNames' : ["items/1FVKqhbDhYWKkTUkVjd7_MXUymKh3mGS7zf54_C2IWns"]
        // }).catch((error) => {
        //     console.error("Error fetching Drive Activity:", error);
        //     return NextResponse.json({ error: error.message }, { status: 500 });
        // });

        // Return the API response
        return NextResponse.json({ response: response });

    } catch (error) {
        console.error("Error fetching Drive:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
