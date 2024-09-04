import 'dotenv/config';
import mongoose from 'mongoose';

const connectDB = async () => {
  const MONGO_URL = process.env.MONGO_URL;
  try {
    await mongoose
      .connect(`${MONGO_URL}`)
      .then(() => {
        console.log('Connected to Database');
      })
      .catch((err) => {
        console.log('Error connecting to Database:', err);
      });
  } catch (err) {
    console.log('Error connecting to Database:', err);
    process.exit(1);
  }
};

export default connectDB;
