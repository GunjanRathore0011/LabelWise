const express=require("express");
const app=express();
require("dotenv").config();
const dbconnect=require("./config/database");
const cookieParser=require("cookie-parser");

// port number
const PORT=process.env.PORT;
// connect with database;
dbconnect();

// add middlewares
app.use(express.json());
app.use(cookieParser());

const userRoute=require("./routes/authRoute");
app.use("/api/auth",userRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});