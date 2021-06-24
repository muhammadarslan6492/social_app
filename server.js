//all module imports 
import express from 'express';
import morgan from 'morgan';
import mongoose from "mongoose"
import dotenv from "dotenv"
import bodyParser from 'body-parser';
import expressValidator from 'express-validator'


//all route imports

import postRouter from "./routes/postRoute.js"




dotenv.config();

//database congiguration
 mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
    console.log("database is connected successfully")
}).catch(err => {
    console.log(err)
});



//app configuration
const app = express();



//creating my ownMiddleware

// const myOwnMiddleware = (req, res, next) => {
//     console.log("this is my own middleware");

//     next();
// }


//middleware
app.use(express.json());
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(expressValidator())



// app.use(myOwnMiddleware)





//router middleware

app.use("/", postRouter);





const port = process.env.PORT || 8080;


app.listen(port, () => {
    console.log(`app running on port ${port}`)
})