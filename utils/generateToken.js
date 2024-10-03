import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVar.js";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: "15d" });

  res.cookie("jwt", token, {
    httpOnly: true, // xss protection
    sameSite: "strict", // CSRF Attacks Protection
    secure: ENV_VARS.NODE_ENV !== "development",
    maxAge: 1000 * 60 * 60 * 24 * 15,
  });

  return token;
};

export default generateTokenAndSetCookie;
