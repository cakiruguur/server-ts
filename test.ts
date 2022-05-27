import { Model } from "mongoose";
import { IUser } from "./src/modules/User/UserModel";

const test = <T extends string>(arg: T) => {
  return arg;
};

interface testObj {
  name: string;
  surname: string;
  age: number;
  email: string
};

let user: Model<IUser>