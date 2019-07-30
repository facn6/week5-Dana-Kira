const router = (req,res)=>{
    if(req.url == '/')
    {
        res.writeHead(200 ,{'content-type' : "text/html"})
        res.end();
    }else{
        res.writeHead(404);
        res.end(`<h1>unknown uri</h1>`);
    }
}

module.exports = router;