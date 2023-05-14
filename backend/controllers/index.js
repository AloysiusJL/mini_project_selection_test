const registerController = require("./registerController")
const loginController = require("./loginController")
const verifyController = require("./verifyController")
const forgotPasswordController = require("./forgotPasswordController")
const resetPasswordController = require("./resetPasswordController")
const newPostController = require("./newPostController")

module.exports = {
    registerController,
    loginController,
    verifyController,
    forgotPasswordController,
    resetPasswordController,
    newPostController
}