import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { corsOptions } from './corsOptions.js';
import connectDB from './src/db/connectDB.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const appConfig = () => {
  app
    .use(cors(corsOptions))
    .use(express.json())
    .use(morgan('dev'))
    .use(bodyParser.json())
    .use(express.urlencoded({ extended: true }))
    .use('/public', express.static(path.join(__dirname, 'src', 'public')))
    .use(cookieParser())
    .listen(PORT, () => {
      console.log(`Port is running on ${PORT}`);
      connectDB();
    });
};

export { app };
