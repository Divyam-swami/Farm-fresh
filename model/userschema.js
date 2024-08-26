const mongoose= require("mongoose")
const bcrypt= require("bcrypt")

const registerSchema= new mongoose.Schema({
    username:
    {
        type:String,
        reuqired:true
    },
    email:
    {
        type:String,
        reuqired:true
    },
    password:
    {
        type:String,
        reuqired:true
    },
    confirmpassword:
    {
        type:String,
        reuqired:true
    },
    address:
    {
        type:String,
        reuqired:true
    },
    phone:
    {
        type:Number,
        reuqired:true
    }
})

registerSchema.pre("save",function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = bcrypt.hashSync(this.password,10);
    next();

})

registerSchema.methods.comparePassword = function(plaintext, callback) {
    return callback(null, bcrypt.compareSync(plaintext, this.password));
};

const registerschema1= new mongoose.model("register", registerSchema);
module.exports= registerschema1;