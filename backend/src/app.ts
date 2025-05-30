import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import stopRoutes from './routes/stopRoutes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/stops', stopRoutes);

export default app;
