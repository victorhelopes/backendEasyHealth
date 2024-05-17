import express from 'express'
import routes from './routes/index.routes';
import mongoose from 'mongoose';
import cors from 'cors';

import '../config/env';

const app = express();

app.use(cors())

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.DATA_BASE_URL  as string);
  });

export default app;
