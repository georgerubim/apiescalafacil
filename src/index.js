// imports
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
var cors = require('cors');


const app = express();
// banco
mongoose.connect('mongodb+srv://escalafacil:contatobmp123@escalafacil-6bksy.mongodb.net/escalafacil?retryWrites=true&w=majority', {
  useNewUrlParser : true,
  useUnifiedTopology: true
});

// configs
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(morgan("dev"));

app.use(cors("*"));


// rotas
app.use(require("./rotas/v1/users"));
app.use(require("./rotas/v1/credits"));
app.use(require("./rotas/v1/shops"));
//apps
app.use(require("./rotas/apps/comentafacil"));
//rota geral
app.use(require("./rotas/v1/geral"));

app.get("/*", (req, res)=>{
  res.json({message: "404 Not Found", status_code: 404})
})

// executa server
app.listen(3000);
