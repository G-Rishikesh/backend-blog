import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';
import blogRouter from './routes/blog-routes';
import cors from 'cors';

const app=express();
app.use(cors());
app.use(express.json());

app.use("/api/user",router);
app.use("/api/blog",blogRouter);

mongoose.connect("mongodb+srv://admin:tE45aQAoPxQMIeUv@cluster0.1cq5qc8.mongodb.net/Blog?retryWrites=true&w=majority"
)
.then(()=>app.listen(5000))
.then(()=>console.log("Connected to database and listening to localhost 5000"))
.catch((err)=>console.log(err));




//tE45aQAoPxQMIeUv