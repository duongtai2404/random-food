const jwt = require('jsonwebtoken');

const isAuth = (req, res, next) => {
  const authorization = req.get('Authorization');

  req.isAuth = false;

  if (!authorization) {
    return next();
  }

  const token = authorization.split(' ')[1];
  if (!token || token === '') {
    return next();
  }

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, 'somesecretkey');
  } catch (err) {
    return next();
  }

  if (!decodedToken) {
    return next();
  }

  req.isAuth = true;
  req.userId = decodedToken.userId;
  return next();
};

module.exports = isAuth;
