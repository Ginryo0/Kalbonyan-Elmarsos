import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import xss from 'xss-clean';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';

import connectDB from './db.js';
import authRouter from './routes/authRoutes.js';
import notesRoutes from './routes/notesRoutes.js';

const app = express();

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

// Client
app.use(express.static(path.resolve(__dirname, './client')));

app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api/notes', notesRoutes);

app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client', 'index.html'));
});

app.use((req, res) => {
  res.status(404).send('Route does not exist');
});

app.use((err, req, res, next) => {
  res.status(500).send('Something went wrong. Please, try again later.');
});

const port = process.env.PORT || 8080;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
