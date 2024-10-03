import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import { ENV_VARS } from "../config/envVar.js";

const signup = async (req, res) => {
  const { username, password, confirmPassword, gender, fullName } = req.body;
  try {
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Password not match" });
    }

    const user = await User.findOne({
      username: new RegExp("^" + username + "$", "i"),
    });

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exist" });
    }

    // Hash Password Here

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // https://avatar-placeholder.iran.liara.run/

    const boyAvatar = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlAvatar = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? boyAvatar : girlAvatar,
    });

    if (newUser) {
      await generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        success: true,
        message: "User created successfully",
        user: {
          fullName: newUser.fullName,
          username: newUser.username,
          gender: newUser.gender,
          profilePic: newUser.profilePic,
        },
      });
    } else {
      res.status(400).json({ success: false, message: "Invalid User Data" });
    }
  } catch (error) {
    console.log("Error in Login Controller: ", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect credentials" });
    } else {
      await generateTokenAndSetCookie(user._id, res);
      res.status(200).json({
        success: true,
        message: "Login successfully",
        user: {
          fullName: user.fullName,
          username: user.username,
          gender: user.gender,
          profilePic: user.profilePic,
        },
      });
    }
  } catch (error) {
    console.log("Error in Login Controller: ", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const logout = async (req, res) => {
  try {
    res
      .clearCookie("jwt", {
        httpOnly: true,
        sameSite: "strict",
        secure: ENV_VARS.NODE_ENV !== "development",
      })
      .status(200)
      .json({ success: true, message: "Logout successfully" });
  } catch (error) {
    console.log("Error in Logout Controller: ", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export { signup, login, logout };
