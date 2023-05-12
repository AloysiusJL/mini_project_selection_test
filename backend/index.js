const express = require("express");
const PORT = 8000;
const app = express();
const { db } = require("./database");
const { authRouter } = require("./routers"); // Update the import path
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/", authRouter); // Use the authRouter middleware for the "/auth" route

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
