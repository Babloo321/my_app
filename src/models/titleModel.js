import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name:{type: String, required: true},
  title: {type: String, required: true}
});

const TitleModel = mongoose.models.users || mongoose.model("users", userSchema);
export default TitleModel;
