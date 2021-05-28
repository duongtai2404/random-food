const foodGraud = (req, res, next) => {
  if (!req.isAuth) {
    return res.status(401).json({ error: 'Unauthentication' });
  }

  return next();
};

module.exports = foodGraud;
