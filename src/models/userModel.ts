import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  role: string;
  email: string;
  phoneNumber: string;
}

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
});

export default mongoose.model<IUser>("User", userSchema);
