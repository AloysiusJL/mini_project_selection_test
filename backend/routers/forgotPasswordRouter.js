const express = require("express")
const { forgotPasswordController } = require("../controllers/index")
const router = express.Router()

router.get('/forgot-password', forgotPasswordController.forgotPassword)

module.exports = router