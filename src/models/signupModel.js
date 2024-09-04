import mongoose from "mongoose";

const signupSchema = new mongoose.Schema({
  username:{type:String, require: true},
  email:{type: String, required: true, unique:true},
  mobile:{type:Number, require: true},
  password: {type: String, required: true}
});

const SignupModel = mongoose.models.signup || mongoose.model("signup", signupSchema);
export default SignupModel;
