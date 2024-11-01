const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const body = req.body;
        const { password } = body;
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({ ...body, password: hashedPassword });
        res.json({
            message: "User created successfully.",
            user: user,
            status: 200
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Registration failed",
            error: err.message
        });
    }
}
