const mongoose= require("mongoose")
var conn= mongoose.connect("mongodb+srv://divyamswami:divyam123@cluster0.y2vs7ag.mongodb.net/project?retryWrites=true&w=majority&appName=Cluster0",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("connection seccessfull"))
.catch((err)=>console.log(err));

module.exports=conn