const routes = require('express').Router();

// geral
routes.get("/v1/*", (req,res)=>{
    res.json({message: "404 Not Found", status_code: 404})
})
routes.post("/v1/*", (req,res)=>{
    res.json({message: "404 Not Found", status_code: 404})
})


module.exports = routes; 