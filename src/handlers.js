const fs = require("fs");
const path =require("path");

const handlerHomeRoute = (response)=>{
    const filepath = path.join(__dirname, '..' , 'public' , 'index.html');
    fs.readFile(filepath, (error,file)=>{
        if(error)
        {
            console.log(error);
            response.writeHead(500, {'Content-type' : 'text/html'});
            response.end(`<h1> we have an error , sorry</h1>`);
        }
        else
        {
            response.writeHead(200 , {'Content-type' : 'text/html'});
            response.end(file);
        }
    });
}

module.exports={handlerHomeRoute};