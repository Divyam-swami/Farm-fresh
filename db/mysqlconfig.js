const mysql= require("mysql")
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "mydb"
});

con.connect(function(error){
    if(error)throw error;
    console.log("connected")
    // con.query("CREATE DATABASE mydb",function(err,result){
    //     if(error)throw error;
    //     console.log("database created")
    // })
    // var sql= "CREATE TABLE student(name VARCHAR(255),address VARCHAR(255),email VARCHAR(255),course VARCHAR(255),rollno INT)"
    // con.query(sql,function(err,result){
    //     if(error)throw error;
    //     console.log("table created")
    // })
    // var sql = "INSERT INTO student (name, address, email, course) VALUES ?";
    // var values = [
    //   ['John', 'Highway 71','anonymous@gmail.com','hindi literature' ],
    //   ['Peter', 'Lowstreet 4', 'anonymous@gmail.com','hindi litreature'],
    //   ['Amy', 'Apple st 652', 'anonymous@gmail.com','hindi litreature'],
    //   ['Hannah', 'Mountain 21', 'anonymous@gmail.com','hindi litreature'],
    //   ['Michael', 'Valley 345', 'anonymous@gmail.com','hindi litreature'],
    //   ['Sandy', 'Ocean blvd 2', 'anonymous@gmail.com','english litreature'],
    //   ['Betty', 'Green Grass 1', 'anonymous@gmail.com','social science litreature'],
    //   ['Richard', 'Sky st 331', 'anonymous@gmail.com','social science litreature'],
    //   ['Susan', 'One way 98', 'anonymous@gmail.com','social science litreature'],
    //   ['Vicky', 'Yellow Garden 2', 'anonymous@gmail.com','CS technology'],
    //   ['Ben', 'Park Lane 38', 'anonymous@gmail.com','CS technology'],
    //   ['William', 'Central st 954', 'anonymous@gmail.com','history hounors'],
    //   ['Chuck', 'Main Road 989', 'anonymous@gmail.com','history hounors'],
    //   ['Maddy', 'Sideway 1633', 'anonymous@gmail.com','history hounors'],
    //   ['Rviol', 'Sydney 1633', 'anonymous@gmail.com','geography hounors'],
    //   ['Chola', 'Sydney 1633', 'anonymous@gmail.com','geography hounors'],
    //   ['Manga', 'Atlanta 1633', 'anonymous@gmail.com','geography hounors'],
    //   ['Veena', 'Atlanta 1633', 'anonymous@gmail.com','universal']
    // ];
    // con.query(sql, [values], function (err, result) {
    //   if (err) throw err;
    //   console.log("Number of records inserted: " + result.affectedRows);
    // });

   
    // con.query("SELECT * FROM customers", function (err, result, fields) {
    //     if (err) throw err;
    //     console.log(result);
    //   });

    // con.query("SELECT * FROM customers WHERE address = 'najafgarh'", function (err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //   });

    //   con.query("SELECT * FROM customers WHERE name = 'Chuck'", function (err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //   });

    
    // con.query("SELECT * FROM customers WHERE address LIKE 'n%'", function (err, result) {
    //   if (err) throw err;
    //   console.log(result);
    // });

    // con.query("SELECT * FROM customers WHERE address LIKE 'C%'",function(err,result){
    //     if (error) {
    //         throw error;
    //     }
    //     console.log(result);
    // })

    // var name= "divyam"
    // var address= "najafgarh"
    // var sql="SELECT * FROM customers WHERE name=? OR address=?"
    // con.query(sql,[name,address],function(err,result){
    //     if (error) {
    //         throw error;
    //     }
    //     console.log(result);
    // })

    // con.query("SELECT * FROM student WHERE course LIKE 'g%'",function(err,result){
    //     if (error) {
    //         throw error;
    //     }
    //     console.log(result)
    // })

  //   var sql = "UPDATE student SET rollno = '24'";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log(result.affectedRows + " record(s) updated");
  // });

  // var sql="SELECT * FROM student LIMIT 3,5"
  // con.query(sql,(err,result)=>{
  //   if (error) {
  //     throw error;
  //   }
  //   console.log(result);
  // })
   
})