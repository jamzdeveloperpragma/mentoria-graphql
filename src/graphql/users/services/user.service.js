import { UserModel } from "../entity/user.entity.js";
import {validateJwt} from "../../config/jwt/index.js"
import bcrypt from "bcrypt";
const saltRounds = 10;

export const allUser = async (_, args, context) => {
  console.log("🚀 ~ allUser ~ args:", args);
  console.log("🚀 ~ allUser ~ context:", context);

  const usuarios = await UserModel.find({});
  return usuarios;
};
export const allUserAdmin = async (_, args, context) => {

   validateJwt(context.token)
  console.log("🚀 ~ allUser ~ args:", args);
  console.log("🚀 ~ allUser ~ context:", context);

  const usuarios = await UserModel.find({});
  return usuarios;
};

export const createUserService = async (_, data, context) => {
  console.log(
    "🚀 ~ file: user.service.js:15 ~ createUserService ~ context:",
    context
  );

  //logica de negocios, para validar.
  const { password } = data.createUserInput;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashPassword = bcrypt.hashSync(password, salt);
  console.log("🚀 ~ createUserService ~ hashPassword:", hashPassword);

  console.log(data.createUserInput);
  const newUser = await UserModel.create({
    ...data.createUserInput,
    password: hashPassword,
  });
  await newUser.save();

  return true;
};
