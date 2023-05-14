const registerController = require("./registerController")
const loginController = require("./loginController")
const verifyController = require("./verifyController")
const forgotPasswordController = require("./forgotPasswordController")
const resetPasswordController = require("./resetPasswordController")
const newPostController = require("./newPostController")
const getPostController = require("./getPostController")

module.exports = {
    registerController,
    loginController,
    verifyController,
    forgotPasswordController,
    resetPasswordController,
    newPostController,
    getPostController,
}