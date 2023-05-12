const { db, query } = require("../database")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports = {
  register: async (req, res) => {
    const { username, email, password, fullName} = req.body

    let getUsernameQuery = `SELECT * FROM users WHERE username=${db.escape(username)}`

    let isUsernameExist = await query(getUsernameQuery)

    if(isUsernameExist.length > 0){
      return res.status(400).send({message: 'Username already taken'})
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    const sql = "INSERT INTO users (username, email, password, fullName) VALUES (?, ?, ?, ?)";
    const values = [username, email, hashPassword, fullName]
    let addUserResult = await query(sql, values)
    return res
      .status(200)
      .send({data: addUserResult, message: "Register success"})
  },
}