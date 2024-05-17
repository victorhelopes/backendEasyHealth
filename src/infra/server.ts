import express from 'express'
import routes from './routes/index.routes';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(cors())

app.use(express.json());
app.use(routes);

app.listen(4000, () => {
    mongoose.connect("mongodb+srv://FeiraEJ:FeiraEJ@cluster0.wr1cu.mongodb.net/?retryWrites=true&w=majority");
  });

export default app;
