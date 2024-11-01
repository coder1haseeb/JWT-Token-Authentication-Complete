const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const body = req.body;
    const { email, password } = body;
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      return res.status(404).json({
        message: "User not found or incorrect email",
        status: 404,
      });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({
        message: "Incorrect Password",
        status: 400,
      });
    }
    
    const token = jwt.sign({ id: user.id, email: user.email }, "HaseebPasswordAPP", { expiresIn: "1d" });
    
    res.setHeader("Authorization", `Bearer ${token}`);
    res.json({
      message: "Login successful",
      user: user,
      status: 200,
    });
  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
};
