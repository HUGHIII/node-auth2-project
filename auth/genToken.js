const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

module.exports = {
  generateToken,
};

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    role: user.department,
  };
  const options = {
    expiresIn: "8h",
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}
