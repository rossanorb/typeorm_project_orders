import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import { AppDataSource } from './data-source';
import routes from './routes/index.route';

dotenv.config();
if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT);

const app = express();
app.use(
  cors({
    origin: `http://localhost:${PORT}`,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

AppDataSource.initialize()
  .then(async () => {
    console.log('connection to database successful');
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch(error => console.log(error));
