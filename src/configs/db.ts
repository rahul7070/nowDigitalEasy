import mongoose from "mongoose";

// Load environment variables from .env file

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(
      "mongodb+srv://rahulraman:rahulraman@cluster0.wsz3ebs.mongodb.net/nowDigitalEasy?retryWrites=true&w=majority"
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
