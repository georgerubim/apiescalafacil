const routes = require('express').Router();
const Shop = require('../../models/Shops');
const DeleteShop = require('../../models/DeleteShop');

// CRIAR
routes.post("/v1/createShop", async (req,res)=>{
    const findshop = await Shop.find({
        shop: req.body.shop
    })
    console.log(findshop[0])
    if(!findshop[0]){
        const shop = await Shop.create({
            shop:  req.body.shop,
            user:  req.body.user,
            apiKey:  req.body.apiKey,
            senha:  req.body.senha,
            sharedSecret:  req.body.sharedSecret,
            active:  req.body.active
        })
        console.log("Shop criado com sucesso")
        res.json({message:"Shop criado com sucesso", status_code:"200"})
    }else{
        console.log("Shop erro")
        res.json({message:"Shop já existe", status_code:"400"})
    }
})

// DELETAR
routes.post("/v1/deleteShop", async (req,res)=>{
    const findshop = await Shop.deleteOne({
        user: req.body.user,
        shop: req.body.shop
    })
    if(!findshop[0]){
        const deleteShop = await DeleteShop.create({
            shop:  req.body.shop,
            user:  req.body.user,
        })
        res.json({message:"Shop deletado com sucesso", status_code:"200"})
    }else{
        res.json({message:"Shop não deletado", status_code:"400"})
    }
})

// BUSCAR
routes.post("/v1/findShopByShop", async (req,res)=>{
    const findshop = await Shop.find({
        shop: req.body.shop
    })
    
    if(findshop[0]){
        data = {
            _id: findshop[0]._id,
            shop: findshop[0].shop,
            user: findshop[0].user,
            apiKey:  findshop[0].apiKey,
            senha:  findshop[0].senha,
            sharedSecret:  findshop[0].sharedSecret,
            active: findshop[0].active,
            createdAt: findshop[0].createdAt,
            status_code: "200",
        }
        res.send(data);
    }else{
        res.json({message:"Shop não existe", status_code:"400"})
    }

});

routes.post("/v1/findShopByUser", async (req,res)=>{
    const findshop = await Shop.find({
        user: req.body.user
    })
    const countfindshop = await Shop.find({
        user: req.body.user
    }).count()
    console.log(findshop);
    if(findshop[0]){
        res.send({shops:{findshop}, count_shops: countfindshop});
    }else{
        res.json({message:"Shop não existe", status_code:"400"})
    }
});

module.exports = routes; 