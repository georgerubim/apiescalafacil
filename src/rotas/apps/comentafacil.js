const routes = require('express').Router();
var axios = require('axios');
const Coments = require('../../models/Comentafacil_Coments');
const Shop = require('../../models/Shops');
const multer = require("multer");
const multerConfig = require("../../config/multer")

// geral
routes.get("/apps/comentafacil", (req,res)=>{

})

routes.post("/v1/app/comentafacil/createComent",multer(multerConfig).single("file[]"), async (req,res)=>{
    const findshop = await Shop.find({
        shop: req.body.shop
    })
    if(findshop[0]){
    console.log(req.file)
    const coments = await Coments.create({
        shop: req.body.shop,
        productId: req.body.productId,
        text:  req.body.text,
        name:  req.body.name,
        rating:  req.body.rating,
        img_name: req.file.originalname,
        img_size: req.file.size,
        img_key: req.file.filename,
        img_url: ''
    })
    console.log("Coment criado com sucesso")
    res.json({message:"Coment criado com sucesso", status_code:"200"})
}else{
    console.log("Coment erro")
    res.json({message:"Shop não existe", status_code:"400"})
}
})

routes.post("/apps/comentafacil", async (req,res)=>{

    const coments = await Coments.find({
        shop: req.body.shop.substr(8),
        productId: req.body.productId
    })
    const coments_count = await Coments.find({
        shop: req.body.shop.substr(8),
        productId: req.body.productId
    }).countDocuments();

  

  await axios.get('http://localhost/comentafacil/',{
    params: {
        e: {
            shop: req.body.shop
        ,   productId: req.body.productId 
        ,   thema: "default" 
        ,   coments_count: coments_count
        ,   coments: coments
        }
        }
})
   .then(function(response){
        res.send(response.data);
   })
})


module.exports = routes; 