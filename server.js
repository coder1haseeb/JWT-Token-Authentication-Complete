const express = require("express");
const app = express();

app.use(express.json());

const sequelize = require("./src/database/database");

app.get("/hello", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

const userRegisterRoute = require("./src/routes/registrationRoute")
const userLoginRoute = require("./src/routes/loginUser")

app.use("/users/register" , userRegisterRoute)
app.use("/users/login", userLoginRoute )

sequelize
  .sync()
  .then(() => {
    console.log("Database synced successfully.");
  })
  .catch((err) => {
    console.log("Database sync falied due to", err);
  });

app.listen(3000);
