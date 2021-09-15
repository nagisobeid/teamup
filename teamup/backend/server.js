const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')
const cookieParser = require("cookie-parser");
const sessions = require('express-session');


dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, ()=>console.log("DATABASE CONNECTED"))

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:false,
    cookie: { maxAge: oneDay },
    resave: false
}));


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/app', routesUrls)

app.use(cookieParser());


app.listen(4000,()=> console.log("server is running.."));