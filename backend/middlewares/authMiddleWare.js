import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
  /**
   * Checking id auth header present
   */
  const bearer = req.headers.authorization;
  if (!bearer) {
    res.status(401).json({
      status: 'failed',
      message: 'No auth header found!',
    });
    return;
  }

  /**
   * Checking if token present in auth header
   */
  const [, token] = req.headers.authorization.split(' ');

  if (!token) {
    res.status(401).json({
      status: 'failed',
      message: 'No jwt token present!',
    });
    return;
  }

  /**
   * Checking if it is correct token
   */
  try {
    const decoded = jwt.verify(token, process.env.jwt_secret);

    req.body.userId = decoded.userId;

    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json({
      status: 'failed',
      message: error.message,
    });
  }
};
