import { model, Schema } from "mongoose";
export interface IUser {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator : async (email: string) => {
          const exists: number = await User.countDocuments({ email });
          return !exists;
        },
        message : "Bu email adresiyle daha önce kayıt yapılmış..."
      },
    },
    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model<IUser>("user", userSchema);
export default User;
