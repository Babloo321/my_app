import { NextResponse } from "next/server";
import { dbConnection } from "@/lib/dbConnection";
import SignupModel from "@/models/signupModel";
let dbData;
export async function POST(req) {
  try {
    // Parse the request body
    const data = await req.json();
    // console.log(`email: ${data.email}\npassword: ${data.password}`);
    if (!data || (!data.email && !data.password)) {
      console.log("No email or password provided in the request body");
      return NextResponse.json({ error: "No email or password provided" }, { status: 400 });
    }
console.log(data);
    // Connecting to the database
    await dbConnection();

    // Finding the user based on email or password
    const query = {
      $or: [
          { email: data.email },
        
      ]
  };
  const result = await SignupModel.findOne(query);
  
    console.log("RESULT: ", result);
    if (result) {
      if(result.email === data.email && result.password === data.password){
        dbData = result;
        return NextResponse.json({ message: "Login successfully" }, { status: 200 });

      }else{
        return NextResponse.json({ message: "password incorrect" }, { status: 401 });
      }
    }

    // Return the result as a JSON response
    return NextResponse.json(result, { status: 200 });

  } catch (error) {
    console.error("Error fetching data from the database: ", error);
    return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
  }
}




export async function GET(req) {
  try {
    await dbConnection();

    // Finding the user based on email or password
  const result = await SignupModel.find();
  console.log("RESULT:: ", result);
  if (result) {
    return NextResponse.json(result, { status: 200 });
  }else{
    return NextResponse.json({message: "No data inside database"});
  }

  } catch (error) {
    return NextResponse.json({error:"getting error to fetching data from database"});
  }
  
}