const express = require("express")
const { userProfileController } = require("../controllers/index")
const router = express.Router()

router.get('/profile', userProfileController.getUserProfile)

module.exports = router