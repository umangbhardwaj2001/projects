const express = require("express");
const https = require("https")
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(request,response){
    const location = request.body.location;
    const appid = "3e16a0122975713f9f4c9bb730c8b3a9";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+location+"&appid="+appid+"&units="+unit;
    https.get(url,function(res){
        console.log(res.statusCode);
        res.on("data",function(data){
            const weatherReport = JSON.parse(data);
            const description = weatherReport.weather[0].description;
            const icon = weatherReport.weather[0].icon;
            const temp = weatherReport.main.temp;
            const temp_min = weatherReport.main.temp_min;
            const temp_max = weatherReport.main.temp_max;
            // document.querySelector(".box .info .temp").innerHTML=temp+"℃";

            response.write("<h1>Temperature: "+temp+"</h1>");
            response.write("<h2>description: "+description+"</h2>");
            response.write("<p>temp_min: "+temp_min+" temp_max:"+temp_max+"</p>");
            response.send();
        });
    });
});

app.listen(3000,function(){
    console.log("server is running on 3000 port");
})