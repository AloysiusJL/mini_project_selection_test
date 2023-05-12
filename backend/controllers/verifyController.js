const { db, query } = require("../database");
const { scrtk } = require("../confiq");

module.exports = {
  verify: async (req, res) => {
    const { token } = req.query;

    try {
      const selectUserQuery = "SELECT username, is_verified FROM users WHERE verification_token = ?";
      const [user] = await query(selectUserQuery, [token]);

      if (!user) {
        return res.status(400).send({ message: "Invalid verification token" });
      }

      const { username, is_verified } = user;

      if (is_verified) {
        return res.status(400).send({ message: "User is already verified" });
      }

      const updateUserQuery = "UPDATE users SET is_verified = 1 WHERE username = ?";
      await query(updateUserQuery, [username]);

      return res.redirect("http://localhost:8000/login");
    } catch (error) {
      console.error("Error verifying token:", error);
      return res.status(500).send({ message: "Internal server error" });
    }
  },
};
