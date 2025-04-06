const express=require("express");
const app=express();
require("dotenv").config();
const dbconnect=require("./config/database");
const cookieParser=require("cookie-parser");

const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true, 
}));
// port number
const PORT=process.env.PORT;
// connect with database;
dbconnect();

// add middlewares
app.use(express.json());
app.use(cookieParser());

const userRoute=require("./routes/authRoute");
app.use("/api/auth",userRoute);


const ocrRoute=require("./routes/ocrRoute");
app.use("/api/ocr",ocrRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});



