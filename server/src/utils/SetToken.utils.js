import jwt from 'jsonwebtoken';

const setToken = (req, newUser) => {
  const { name, email, _id } = newUser;

  const accessToken = jwt.sign(
    {
      user: { name, email, id: _id },
    },
    process.env.ACCESS_TOKEN,
    { expiresIn: '1h' },
  );

  req.user = { name, email, id: _id };

  return accessToken;
};

export default setToken;
