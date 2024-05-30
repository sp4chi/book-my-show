import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoute from './routes/authRoute.js';
import userRoute from './routes/userRoute.js';
import movieRoute from './routes/movieRoute.js';

const app = express();

app.use(cors());
dotenv.config();

mongoose.connection
  .on('connected', () => console.log('connected to db ✨'))
  // .on('open', () => console.log('db open ✨'))
  .on('disconnected', () => console.log('db disconnected 😥'));
// .on('reconnected', () => console.log('db reconnected 😃'))
// .on('disconnecting', () => console.log('db disconnecting 🚀'))
// .on('close', () => console.log('db close 👽'));

mongoose.connect(process.env.MONGO).catch((error) => {
  throw error;
});

app.use(express.json());
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/user', userRoute);
app.use('/api/v1/movies', movieRoute);

app.listen(process.env.PORT, () => {
  console.log('connected to server ✨');
});
