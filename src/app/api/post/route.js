import { NextResponse } from "next/server";
import { dbConnection } from "@/lib/dbConnection";
// import userModel from "@/models/userModel";
import TitleModel from "@/models/titleModel";
export async function  GET(req) {
  try {
   await dbConnection();
    const res = await TitleModel.find();
    
    console.log("output: ",res);
    return NextResponse.json(res);

  } catch (error) {
    return NextResponse.json({"error":"Getting server error"}, {status: 500});
  }
}

export async function POST(req) {
  const data = await req.json()
  try {
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    // console.log("error: ",error);
    return NextResponse.json({"error":"Internal Server Error"},{status:500});
    
  }
  
}