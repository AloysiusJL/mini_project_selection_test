const express = require("express");
const PORT = 8000;
const app = express();
const { db } = require("./database");
const { 
  registerRouter,
  loginRouter,
  verifyRouter,
  forgotPasswordRouter,
 } = require("./routers"); // Update the import path
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/", registerRouter);
app.use("/", loginRouter);
app.use("/", verifyRouter);
app.use("/", forgotPasswordRouter);


app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
