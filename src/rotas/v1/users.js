const routes = require('express').Router();
const User = require('../../models/Users');

// USERS
routes.post("/v1/createUser", async (req,res)=>{
    const finduser = await User.find({
        email: req.body.email,
        senha: req.body.senha
    })
    if(!finduser[0]){
        const user = await User.create({
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            senha: req.body.senha,
            convite: req.body.convite,
            status: req.body.status
        })
        res.json({message:"Usuário criado com sucesso", status_code:"200"})
    }else{
        res.json({message:"Usuário já existe", status_code:"400"})
    }
})
routes.post("/v1/findUser", async (req,res)=>{
    const finduser = await User.find({
        email: req.body.email,
        senha: req.body.senha
    })
    if(finduser[0]){
        data = {
            _id: finduser[0]._id,
            nome: finduser[0].nome,
            sobrenome: finduser[0].sobrenome,
            email: finduser[0].email,
            senha: finduser[0].senha,
            convite: finduser[0].convite,
            status: finduser[0].status,
            createdAt: finduser[0].createdAt,
            __v: finduser[0].__v,
            status_code: "200",
        }
        res.send(data);
    }else{
        res.json({message:"Usuário não existe", status_code:"400"})
    }
})

module.exports = routes; 