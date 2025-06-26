import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import shortUrlRouter from "./routes/shortUrl";
import connectDb from "./config/db.config";
dotenv.config();
connectDb();

const port = process.env.PORT || 5001;

const app = express();

//using cors to connect the frontend application and using apis
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    //our frontend is running on port 3000
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api", shortUrlRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
