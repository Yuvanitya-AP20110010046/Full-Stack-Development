const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const https =require("https");
// const { urlencoded } = require("express");
const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})

app.post("/",function(request,respond)
{
    const firstName = request.body.fName;
    const lastName = request.body.lName;
    const email = request.body.email;

    var data ={
        members:[
            {
                email_address: email,
                status:"subscribed",
                merge_fields: {FNAME:firstName,LNAME:lastName}
            }
        ]
    };
    const jsonData =JSON.stringify(data);
    const url ="https://us11.api.mailchimp.com/3.0/lists/21ffbbc734";
    const options ={
        methos:"POST",
        auth : "nityaa:49576eff9a655f1ccd0455c2edf0381a-us11"
    }
    const req = https.request(url,options,function(response){
        response.on("data",function(data){
           console.log( JSON.parse(data));
        })

    })
    req.write(jsonData);
    req.end();
    
});


app.listen(3000,function(){
    console.log("Server started");
})

// API Key: 49576eff9a655f1ccd0455c2edf0381a-us11
// List ID : 21ffbbc734