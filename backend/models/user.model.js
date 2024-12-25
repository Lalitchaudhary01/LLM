import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true, // Remove extra spaces
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true, // Convert email to lowercase
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    phoneNumber: {
      type: String, // Use string for phone numbers
      required: true,
      unique: true,
      match: [/^\d{10,15}$/, "Please provide a valid phone number"], // Validate phone number length
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Ensure a minimum password length
    },
    role: {
      type: String,
      enum: ["student", "Teacher"],
      default: "student", // Default role
    },
    profile: {
      bio: { type: String, trim: true },
      profilePhoto: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
