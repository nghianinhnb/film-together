import express from 'express';
import 'express-async-errors';
import path from 'path';
import cors from 'cors';

import { errorHandler, currentUser } from './middlewares';
import routes from './routes';


const app = express().disable('x-powered-by');

// Express Setting
// app.set('trust proxy', true);


// Common Middlewares
app.use(cors());
app.use('/resources', express.static(path.join(__dirname, '/public')));
app.use(express.json({ limit: '32mb' }));
app.use(express.urlencoded({ extended: true, limit: '32mb' }))


// Custom Middlewares
app.use(currentUser);
app.use("/api/v1",routes);
app.use(errorHandler);


export default app;
