const express = require("express");
const router = express.Router();
var cookie= require("cookie-parser")
var session= require("express-session")
const userschema = require("../model/userschema");
const contactschema = require("../model/contactschema");
const addproduct = require("../model/productschema");
const multer = require("multer");

router.get("/",async (req, res) => {
  try {
    const frontproductdata = await addproduct.find({});
    res.render("../views/index", { frontproductdata: frontproductdata });
    
  } catch (error) {
    console.log(error);
  }
});

router.get("/logout", async (req,res)=>{
  if (req.session.user && req.cookies.user_div) {
    res.clearCookie("user_div")     
    res.redirect("/")  
  } else {
    res.redirect("/login")
  }
})


router.get("/home", (req, res) => {
  res.render("home");
});

router.get("/about", (req, res) => {
  res.render("aboutus");
});
router.get("/product", async (req, res) => {
  try{
  const pageproduct= await addproduct.find({});
  res.render("product",{pageproduct:pageproduct});
  }catch(error){
    console.log(error);
  }
});

router.get("/cart", (req, res) => {
  res.render("addtocart");
});

router.get("/dashboard", (req, res) => {
  if (req.session.user && req.cookies.user_div) {
    res.render("./dashboard/index");       
  } else {
    res.redirect("/login")
  }
  
});

router.get("/addproduct", (req, res) => {
  if (req.session.user && req.cookies.user_div) {
    res.render("./dashboard/addproduct");       
  } else {
    res.redirect("/login")
  }
  
});

router.get("/viewproduct", async (req, res) => {
  try {
    const productdata = await addproduct.find({});
    if (req.session.user && req.cookies.user_div) {
      res.render("./dashboard/viewproduct", { productdata: productdata });       
    } else {
      res.redirect("/login")
    }
    
  } catch (error) {
    console.log(error);
  }
});

router.get("/viewregistration", async (req, res) => {
 
  try {
    const regdata = await userschema.find({});
    if (req.session.user && req.cookies.user_div) {
      res.render("./dashboard/registration", { regdata: regdata });    
    } else {
      res.redirect("/login")
    }
    
    // console.log(regdata);
  } catch (err) {
    console.log(err);
  }
});

router.get("/viewcontact", async (req, res) => {
  
  try {
    const contactdata = await contactschema.find({});
    
    if (req.session.user && req.cookies.user_div) {
      res.render("./dashboard/contact", { contactdata: contactdata });    
    } else {
      res.redirect("/login")
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/login", (req, res) => {
  res.render("./common/login");
});

router.post("/login", async (req,res)=>{
    var email = req.body.email;
    var password= req.body.password;
    
    try {
      var user= await userschema.findOne({email:email})
      .exec();
      if (!user) {
        res.redirect("/login")
      }
      user.comparePassword(password,(error,match)=>{
        if(!match){
          res.redirect("/login")
        }
      })
      req.session.user = user;
      res.redirect("/dashboard")
    } catch (error) {
       console.log(error)
    }

  })

router.get("/product", (req, res) => {
  res.render("product");
});


router.get("/details/:id",async (req ,res )=> {
  try{
    const productdetail= await addproduct.findById(req.params.id);
    res.render("productdetails",{productdetail:productdetail});
    }catch(error){
      console.log(error);
    }
})


// ********************************image upload api for product*********************** //

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const filter = (req, file, cb) => {
  const allowedfiletype = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedfiletype.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, filter });

router.post("/addproduct", upload.single("productimage"), (req, res) => {
  var products = {
    productname: req.body.productName,
    price: req.body.productPrice,
    category: req.body.productCategory,
    productimage: req.file.filename,
    description: req.body.productDescription,
  };
  var prodpost = new addproduct(products);
  prodpost
    .save()
    .then(() => {
      res.json("product added successfully");
    })
    .catch((err) => res.status(400).json("error" + err));
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.post("/contactus", (req, res) => {
  var contactuser = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  };
  var regpost1 = new contactschema(contactuser);
  regpost1
    .save()
    .then(() => res.json("contact registered successfully"))
    .catch((err) => res.status(400).json("error" + err));
});

router.get("/register", (req, res) => {
  res.render("./common/register");
});

router.post("/signup", (req, res) => {
  var register = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confirmpassword: req.body.confirmPassword,
    address: req.body.address,
    phone: req.body.phone,
  };
  var regpost = new userschema(register);
  regpost
    .save()
    .then(() => res.redirect("/register"))
    .catch((err) => res.status(400).json("error" + err));
});

// delete api
router.get("/delete/:id", async (req, res) => {
  try {
    const product = await addproduct.findByIdAndDelete(req.params.id);
    res.redirect("/viewproduct");
  } catch (error) {
    console.log(error);
  }
});

router.get("/delete_1/:id", async (req, res) => {
  try {
    const register = await userschema.findByIdAndDelete(req.params.id);
    res.redirect("/viewregistration");
  } catch (error) {
    console.log(error);
  }
});

router.get("/delete_2/:id", async (req, res) => {
  try {
    const contact = await contactschema.findByIdAndDelete(req.params.id);
    res.redirect("/viewcontact");
  } catch (error) {
    console.log(error);
  }
});

// edit api
router.get("/edit_1/:id", async (req, res) => {
  try {
    const register = await userschema.findById(req.params.id);
    res.render("./dashboard/edit_register", { register: register });
  } catch (error) {
    console.log(error);
  }
});

router.post("/edit_1/:id", async (req, res) => {
  const userid = req.params.id;
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confirmpassword: req.body.confirmPassword,
    address: req.body.address,
    phone: req.body.phone,
  };

  try {
    const updateuser = await userschema.findByIdAndUpdate(userid, user, {
      new: true,
    });

    if (!updateuser) {
      return res.status(404).json({ message: "updated" });
    }
    res.redirect("../viewregistration");
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

router.get("/edit_2/:id", async (req, res) => {
  try {
    const contact = await contactschema.findById(req.params.id);
    res.render("./dashboard/edit_contact", { contact: contact });
  } catch (error) {
    console.log(error);
  }
});

router.post("/edit_2/:id", async (req, res) => {
  const contactid = req.params.id;
  const contact = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  };

  try {
    const updatecontact = await contactschema.findByIdAndUpdate(
      contactid,
      contact,
      { new: true }
    );

    if (!updatecontact) {
      return res.status(404).json({ message: "updated" });
    }
    res.redirect("../contact");
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

router.get("/edit/:id", async (req, res) => {
  try {
    const product = await addproduct.findById(req.params.id);
    res.render("./dashboard/edit_product", { product: product });
  } catch (error) {
    console.log(error);
  }
});

router.post("/edit/:id", async (req, res) => {
  const productid = req.params.id;
  const product1 = {
    productname: req.body.productName,
    price: req.body.productPrice,
    category: req.body.productCategory,
    description: req.body.productDescription,
  };

  try {
    const updateproduct = await addproduct.findByIdAndUpdate(
      productid,
      product1,
      { new: true }
    );

    if (!updateproduct) {
      return res.status(404).json({ message: "updated" });
    }
    res.redirect("../viewproduct");
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

module.exports = router;