const mongoose= require("mongoose")
var conn= mongoose.connect("mongodb+srv://divyamswami:divyam123@cluster0.y2vs7ag.mongodb.net/project?retryWrites=true&w=majority&appName=Cluster0",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("connection seccessfull"))
.catch((err)=>console.log(err));


const listschema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },
    
    date:{
        type:Date,
        default:Date.now
    }
})
// module.exports= conn;

const playlist =new mongoose.model("mydirectory", listschema);

const createdocument= async()=>{
    try{
        const productlist2 = new playlist({
            name:"aman",
            email:"aman@gmail.com",
            address:"ahemdabad"
        })
        const productlist3 = new playlist({
            name:"amrita",
            email:"amrita@gmail.com",
            address:"meerut"
        })
        const productlist4 = new playlist({
            name:"havan",
            email:"havan@gmail.com",
            address:"najafgarh"
        })
        const productlist5 = new playlist({
            name:"ashish",
            email:"ashish@gmail.com",
            address:"mumbai"
        })
        const productlist6 = new playlist({
            name:"kaban",
            email:"kaban@gmail.com",
            address:"delhi"
        })
        const productlist7 = new playlist({
            name:"manish",
            email:"manish@gmail.com",
            address:"najafgarh"
        })
        const productlist8 = new playlist({
            name:"siban",
            email:"siban@gmail.com",
            address:"bihar"
        })
        const productlist9 = new playlist({
            name:"jason",
            email:"jason@gmail.com",
            address:"st church"
        })
        const productlist10 = new playlist({
            name:"anjali",
            email:"anjali@gmail.com",
            address:"guwahati"
        })
        // const result = await playlist.insertMany([productlist2,productlist3,productlist4,productlist5,productlist6,productlist7,productlist8,productlist9,productlist10]);
        // console.log(result);

        // var query= {name:"raman"};
        // const result = await playlist.find(query);
        // console.log(result);
       
        // var query= {address:/^m/};
        // const result = await playlist.find(query);
        // console.log(result);
      
        // var sortlist= {address:-1};
        // const result = await playlist.find().sort(sortlist);
        // console.log(result);
        
        // var deleted= {address:/^m/};
        // const result = await playlist.deleteOne(deleted);
        // console.log(result+"record is deleted");

        // var query= {address:"ahemdabad"}
        // var newvalue={$set:{name:"rohan", address:"vainad"}}
        // const result= await playlist.updateOne(query,newvalue)
     
        // var query= {address:"vainad"}
        // var newvalue={$set:{address:"america"}}
        // const result= await playlist.updateOne(query,newvalue)
        // console.log("redord updated");

        // const result= await playlist.find().limit(5);
        // console.log(result);

    //     const result= playlist.aggregate([
    //         {$lookup:{
    //           from:order,
    //           name:'ashish',
    //           email:"ashish@gamil.com",
    //           address:"mumbai"

    //         }


    //         }
    //     ])
    //     console.log(result);

    //  const result= await playlist.find().limit(5);
    //     console.log(result);


    }
    catch(err){
         console.log(err);
    }
}

createdocument()