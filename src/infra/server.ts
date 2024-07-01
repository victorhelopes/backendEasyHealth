import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import routes from './routes/index.routes';

dotenv.config();

const app = express();

app.use(cors())

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.DATA_BASE_URL  as string);
  });

export default app;
