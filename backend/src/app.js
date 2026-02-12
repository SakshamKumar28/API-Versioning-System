import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app = express();

/*       MiddleWares        */ 

const ratelimiter = rateLimit({
    windowMs: 10*60*1000,   // 10 minutes
    max: 100,  // Limit each IP to 100 requests per 10 minutes
    message: "Too many requests, please try again after 10 minutes"
})

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(ratelimiter);

app.use('/', (req, res)=>{
    res.send("Hello world!");
});


export default app;