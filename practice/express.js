const express = require("express")
const fs= require("fs")
const app = express()

// app.get("/",function(req,res) {
    
//     res.send("hello this is a homepage")

// })
// app.get("/aboutus",function(req,res) {
    
//     res.send("hello this is a about page")

// })
// app.get("/contactus",function(req,res) {
//     res.send("hello this is a contact us page")
// })


// app.listen(4900)

// fs.appendFile("contact.html","",function (err) {
//     if (err) {
//         throw err;
//     }
// })

const router = express.Router()

router.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
router.get("/aboutus",(req,res)=>{
    res.sendFile(__dirname+"/aboutus.html")
})
router.get("/contact",(req,res)=>{
    res.sendFile(__dirname+"/contact.html")
})

app.use("/",router)
app.listen(2900)
