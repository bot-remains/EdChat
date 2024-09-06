import jwt from 'jsonwebtoken';

export const setToken = (req, newUser) => {
  const { email, _id } = newUser;

  const accessToken = jwt.sign(
    {
      user: { email, id: _id },
    },
    process.env.ACCESS_TOKEN,
    { expiresIn: '1h' },
  );

  req.user = { email, id: _id };

  return accessToken;
};
