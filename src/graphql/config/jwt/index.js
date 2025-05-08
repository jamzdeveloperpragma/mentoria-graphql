import jsonwebtoken from "jsonwebtoken";

const validateJwt =async (token) => {
  console.log("🚀 ~ validateJwt ~ token:", process.env.SECRET_JWT)
  
  const result = await jsonwebtoken.verify(token, process.env.SECRET_JWT);
  console.log("🚀 ~ validateJwt ~ result:", result);

  return result ? true : false;
};

export { validateJwt };
