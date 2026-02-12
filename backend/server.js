import app from './src/app.js';
import dotenv from 'dotenv';
import connectDb from './src/db/db.js';
dotenv.config();


async function startServer(){
    const PORT = process.env.PORT || 3000;
    if(!PORT){
        return console.error("PORT is not defined in enviornment variable");
    }
    try {
        connectDb().then(()=>{
            app.listen(PORT, ()=>{
            console.log(`Server is running on port ${PORT}`);
            })
        });
        
    } catch (error) {
        console.error(`Error starting server: ${error}`);
    }
};

startServer();