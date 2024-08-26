const mongoose= require("mongoose")
const contactschema= new mongoose.Schema({
    name:
    {
        type:String,
        reuqired:true
    },
    email:
    {
        type:String,
        reuqired:true
    },
    phone:
    {
        type:Number,
        reuqired:true
    },
   message:{
       type:String,
       reuqired:true
   }
})

const contactschema1= new mongoose.model("contact", contactschema)

module.exports= contactschema1;