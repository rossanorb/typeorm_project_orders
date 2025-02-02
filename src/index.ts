import * as dotenv from "dotenv";
import express from 'express';
import cors from 'cors';
import routes from './routes/index.route'
import { AppDataSource } from "./data-source";

dotenv.config();
if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT);

const app = express();
app.use(cors({
    origin:`http://localhost:${PORT}`
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

AppDataSource.initialize().then(async () => {    
    console.log('Database OK');
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    })
}).catch(error => console.log(error))
