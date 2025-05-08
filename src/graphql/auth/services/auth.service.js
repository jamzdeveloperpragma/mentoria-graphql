import cryptoJs from "crypto-js";
import { UserModel } from "../../users/entity/user.entity.js";
import * as bcrypt from 'bcrypt';
import jsonwebtoken from "jsonwebtoken";

const login = async (_, data, context) => {
  const { email, password } = data;
  console.log("🚀 ~ login ~ email:", email)
  console.log("🚀 ~ login ~ password:", password)

  
  const userFound = await UserModel.findOne({ email });

  console.log("🚀 ~ login ~ userFound:", userFound.password)
  if (!userFound) {
    throw new Error("User not found");
  }

  const math = bcrypt.compareSync(password, userFound.password);
  console.log("🚀 ~ login ~ math:", math)
  if (!math) {
    throw new Error("Invalid password");
  }

  console.log(email, password);

  const token = jsonwebtoken.sign({ id: userFound._id },process.env.SECRET_JWT);

  return { user: userFound.toJSON(), accessToken: token };
};

export { login };
