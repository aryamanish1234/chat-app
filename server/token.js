const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  const newToken = jwt.sign({ id }, "1234567890asdfghjklzxcvbnm", {
    expiresIn: "7d",
  });
  return newToken;
};

module.exports = generateToken;
