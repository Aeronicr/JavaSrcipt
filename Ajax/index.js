const express = require('express');
const fs = require('fs');
const app=express();

app.listen(3000);

app.use('/public/css/*', express.static('css'));


const jsonParser = express.json();
  
app.post("/user", jsonParser, function (request, response) {
    console.log(request.body);
    if(!request.body) return response.sendStatus(400);
     
    response.json(request.body); // отправляем пришедший ответ обратно
});
  

app.get('/*', function(req,res){
	console.log(filePath)
	if (req.url.startsWith("/public/")){

	var filePath = req.url.substr(1);
        fs.readFile(filePath, function(error, data){

            if(error){
                     f404(res);
            }   
            else{
                res.statusCode=200;
                res.end(data);
            }
        })
	}else{
 		f404(res);
	}
});



function f404(res) {
    res.statusCode = 404;
    res.end("Resourse not found!");
}