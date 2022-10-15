import dotenv from 'dotenv';
dotenv.config();

import app from './app';


async function start() {
    const PORT = process.env.PORT || 8000;

    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT} ...`);
    });
}


start();
