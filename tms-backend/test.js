import mongoose from "mongoose";

const uri =
  "mongodb+srv://ahujavansh:vanshahuja123@tms.i4tyed4.mongodb.net/?retryWrites=true&w=majority&appName=tms";

try {
  await mongoose.connect(uri);
  console.log("✅ Connected");
} catch (err) {
  console.error(err);
}