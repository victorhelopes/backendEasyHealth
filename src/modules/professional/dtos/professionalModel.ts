import mongoose, { Schema } from "mongoose";

const type = mongoose.Schema.Types;

const professionalSchema = new mongoose.Schema(
  {
    name: {
      type: type.String,
      required: true,
    },
    lastName: {
      type: type.String,
      required: true,
    },
    email: {
      type: type.String,
      required: true,
      unique: true,
    },
    password: {
      type: type.String,
      required: true,
    },
    telephone: {
      type: type.String,
    },
    gender: {
      type: type.String,
      enum: ["M", "F", "other"],
    },
    isActive: {
      type: type.Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Professional", professionalSchema);
