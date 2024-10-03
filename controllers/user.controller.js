import User from "../models/user.model.js";

const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
    res
      .status(200)
      .json({
        success: true,
        message: "Users fetched successfully",
        users: filteredUsers,
      });
  } catch (error) {
    console.error("Error in Get Users For Sidebar Controller:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export { getUsersForSidebar };
