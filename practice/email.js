const nodeMailer=require('nodemailer');

var transport= nodeMailer.createTransport({
    host:"smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: "divyumswami@gmail.com",
        pass:"hdqr qlgs dvhx jckg"
    }
})

var mailOption= {
    from:"divyumswami@gmail.com",
    to:"thakurthakur16251@gmail.com",
    subject: "node mail",
    text: "hello this is a message send through node js"
}

transport.sendMail(mailOption,function(err,info){
    if (err) {
        console.log(err)
    } else {

        console.log("message is sent", info.response);
        
    }
})
