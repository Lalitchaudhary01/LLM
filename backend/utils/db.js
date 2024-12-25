import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connection success");
  } catch (error) {
    console.error("MongoDB connection failed");
  }
};
export default connectDB;
