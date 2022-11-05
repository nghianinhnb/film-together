require('dotenv').config();
import mongoose from 'mongoose';


// Check required config and dependence
import { checkBeforeInit } from './initialize/check-before-init';
checkBeforeInit();


// Start server
import app from './app';
import { CONFIG } from './initialize/config';


async function start() {
    const PORT = CONFIG.LISTEN.PORT;
    
    try {
        await mongoose.connect(CONFIG.MONGO.URI);
        console.log("Connected to MongoDb");
    } catch (err) {
        console.error(err);
    }

    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT} ...`);
    });
}


start();
