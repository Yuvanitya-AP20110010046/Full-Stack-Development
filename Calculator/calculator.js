const express=require("express");
const bodyParser=require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(request,response){

    response.sendFile(__dirname+"/index.html");

});

app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname+ "/bmiCalculator.html");
})
app.post("/bmiCalculator",function(req,res){
    var w = parseFloat(req.body.weight);
    var h=parseFloat(req.body.height);
    var result = w/(h*h);
    res.send("Your BMI is :"+result);
 
});

app.post("/",function(req,res)
{
    var result = Number(req.body.number1)+Number(req.body.number2);

    res.send("value : "+result);
})

app.listen(3000,function(){console.log("Server started!");
});
