require('dotenv').config();
import mongoose from 'mongoose';

import app from './app';


async function start() {
    const PORT = process.env.PORT || 8000;

    if (!process.env.JWT_KEY) throw new Error("JWT_KEY must be defined");
    
    if (!process.env.MONGO_URI) throw new Error("MONGO_URI must be defined");
    
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDb");
    } catch (err) {
        console.error(err);
    }

    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT} ...`);
    });
}


start();