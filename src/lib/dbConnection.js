import mongoose from "mongoose";

export async function dbConnection() {
  try {
    mongoose.connect("mongodb://localhost:27017/chatBoat");
    console.log("MongoDb connection successfully");
  } catch (error) {
    console.log("Gettiing error to connectiong mongodb");
  }
}