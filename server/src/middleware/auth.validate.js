import jwt from 'jsonwebtoken';
import { AsyncHandler } from '../utils/AsyncHandler.js';

export const authValidator = AsyncHandler((req, res, next) => {
  const cookie = req.cookies?.userCookie;
  if (cookie) {
    jwt.verify(cookie, process.env.ACCESS_TOKEN, (err, decoded) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = decoded.user;
      next();
    });
  } else {
    res.status(401).json({ error: 'User not authenticated' });
  }
});
