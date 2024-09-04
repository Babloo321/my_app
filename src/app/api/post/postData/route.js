import { NextResponse } from "next/server";
import { dbConnection } from "@/lib/dbConnection";
import SignupModel from "@/models/signupModel";
export async function POST(req) {
  try {
  const data = await req.json()
  if(!data){
    console.log("No data found inside request body");
    return NextResponse.json({"msg":"No Data found inside request body"});
  }
    console.log(data);
    await dbConnection();
    const result = await SignupModel.create(data);
    return NextResponse.json({result}, {status:200});
  } catch (error) {
    // console.log("error: ",error);
    console.log("getting error from server side");
    return NextResponse.json({"error":"Internal Server Error"},{status:500});
  }
}