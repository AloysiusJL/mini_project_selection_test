const { db, query } = require("../database");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { scrtk } = require("../confiq");

module.exports = {
  forgotPassword: async (req, res) => {
    const { email } = req.body;

    try {
      const getEmailQuery = `SELECT username FROM users WHERE email = ${db.escape(email)}`;
      const isEmailExist = await query(getEmailQuery);

      if (isEmailExist.length === 0) {
        console.log("Email not found:", email);
        return res.status(404).json({ message: "Email not found" });
      }

      const generateResetPasswordToken = (email) => {
        const secretKey = scrtk;
        const token = jwt.sign({ email }, secretKey, { expiresIn: "9999 years" });
        return token;
      };

      const resetPasswordToken = generateResetPasswordToken(email);
      const resetPasswordLink = `http://localhost:3000/reset-password?token=${resetPasswordToken}`;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "aloysiuspurwadhika@gmail.com",
          pass: "dqowfzwvjafiefwq",
        },
      });

      const mailOptions = {
        from: "aloysiuspurwadhika@gmail.com",
        to: email,
        subject: "Account Verification",
        text: `Please click the following link to reset your password: ${resetPasswordLink}`,
        html: `<p>Please click the following link to reset your password:</p><p><a href="${resetPasswordLink}">${resetPasswordLink}</a></p>`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
          return res.status(500).json({ message: "Failed to send reset password link. Please try again." });
        }
        console.log("Reset password email sent:", info.response);
        return res.status(200).json({ message: "Password reset link sent to your email" });
      });
    } catch (error) {
      console.error("Error retrieving email:", error);
      console.log("Email:", email);
      return res.status(500).json({ message: "Failed to retrieve email. Please try again." });
    }
  },
};
