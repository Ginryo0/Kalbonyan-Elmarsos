import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    return res.status(401).json({ message: 'Missing auth headers.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    let decodedToken = jwt.decode(token, process.env.JWT_SECRET);
    if (!decodedToken || !decodedToken.userId) {
      return res.status(401).json({ message: 'Invalid JWT signature.' });
    }

    req.userId = decodedToken.userId;
    next();
  } catch (err) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

export default authMiddleware;
