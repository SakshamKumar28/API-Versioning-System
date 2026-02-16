import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import userRoutesV1 from "./v1/routes/userRoutes.js";
import userRoutesV2 from "./v2/routes/userRoutes.js";
import deprecationMiddleware from "./middleware/deprecation.js";

const app = express();

/*       MiddleWares        */

const ratelimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100, // Limit each IP to 100 requests per 10 minutes
  message: "Too many requests, please try again after 10 minutes",
});

app.use(cors({
  origin: "*",
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(helmet());
app.use(morgan("dev"));
app.use(ratelimiter);

app.use("/api/v1/users", deprecationMiddleware, userRoutesV1);
app.use("/api/v2/users", userRoutesV2);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

export default app;
