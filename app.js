const express= require("express")
const app= express()
const router = require("./controller/controller") 
const db =require("./db/database")
const bodyParser = require("body-parser")
const path= require("path")
const cookieParser = require("cookie-parser")
const session = require("express-session")


app.set("view engine","ejs")

app.use(cookieParser());
app.use(session({
    key: "user_div",
    secret: "randomdata",
    resave: false,
    saveUninitialized: false,
    cookie:{
        expires: 10000,
    },  
}))
app.use(express.static("views"))
app.use(express.static("upload"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use("/",router)
app.listen(8000)
