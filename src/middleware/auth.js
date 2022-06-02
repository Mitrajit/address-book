const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const tokenArr = (req.body.token || req.query.token || req.headers.authorization || req.headers['x-access-token'])
    .split(' ');
  const token = tokenArr[0] === 'Bearer' ? tokenArr[1] : tokenArr[0];
  if (!token) {
    return res.status(403).send('A token is required for authentication');
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }
  return next();
};

module.exports = verifyToken;
