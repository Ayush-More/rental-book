const jwt = require("jsonwebtoken");
const User = require("./../Model/userModel");

exports.userinfo = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if (!decode) {
      console.log("Invalid token");
      return res.status(401).json({ status: "Fail", message: "Invalid token" });
    }
    const candidate_details = await User.findById(decode.id);
    if (!candidate_details) {
      console.log("User not found");
      return res
        .status(404)
        .json({ status: "Fail", message: "User not found" });
    }
    console.log(candidate_details);

    res.status(200).json({
      status: "Success",
      userData: {
        candidate_details,
      },
    });
  } catch (error) {
    console.error("Error in the profile route", error.message);
    return res
      .status(500)
      .json({ status: "Error", message: "Internal Server Error" });
  }
};
