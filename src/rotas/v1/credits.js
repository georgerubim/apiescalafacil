const routes = require('express').Router();
const Credits = require('../../models/Credits');
const User = require('../../models/Users');

routes.post("/v1/countCredits", async (req,res)=>{
    var creditUser = 0;
    const findUser = await User.find({
        _id: req.body.user
    })

    const findCredits = await Credits.find({
        user: req.body.user
    })

    const countfindCredits = await Credits.find({
        user: req.body.user
    }).countDocuments();

    if(findUser){
        if(countfindCredits){
            for(var i=0;i<countfindCredits;i++){

                if(findCredits[i].type === "add"){
                    creditUser = creditUser + findCredits[i].value
                }else{
                    creditUser = creditUser - findCredits[i].value
                }

            }
            res.send({value:creditUser, status_code:"200"});
        }else{
            res.send({value:0, status_code:"200"});
        }
    }else{
        res.send({message:"Usuário não encontrados", status_code:"400"});
    }


})
// ADD
routes.post("/v1/addCredits", async (req,res)=>{
    const findUser = await User.find({
        user: req.body.user
    })
    if(!findUser[0]){
        const credits = await Credits.create({
            value:  req.body.value,
            user:  req.body.user,
        })
        res.json({message:"Credits adicionado com sucesso", status_code:"200"})
    }else{
        res.json({message:"Credits não adicionados", status_code:"400"})
    }
})
// REMOVE
routes.post("/v1/removeCredits", async (req,res)=>{
    const findUser = await User.find({
        user: req.body.user
    })
    if(!findUser[0]){
        const credits = await Credits.create({
            value:  req.body.value,
            user:  req.body.user,
            type: "remove"
        })
        res.json({message:"Credits removidos com sucesso", status_code:"200"})
    }else{
        res.json({message:"Credits não adicionados", status_code:"400"})
    }
});


module.exports = routes; 