require("dotenv").config();
const express = require("express")
const cors = require("cors")
const morganBody = require("morgan-body");
const loggerStream = require("./utils/handleLogger")
const dbconnetcNoSql = require('./config/mongo'); 
const { dbConnectMySql } = require("./config/mysql");
const app = express()

const ENGINE_DB = process.env.ENGINE_DB;

app.use(cors()) 
app.use(express.json())
app.use(express.static("storage"))

morganBody(app,{
  noColors:true,
  stream: loggerStream,
  skip: function(req, res){
    return req.statusCode < 400 //TODO 2xx, 3xx
  }
})

  const port = process.env.PORT || 3000

  /**
   * Aqui invocamos alas rutas!😎
   */
 app.use("/api",require("./routes"))

  app.listen(port, () => {
  console.log (`http://localhost:${port}`)
});

(ENGINE_DB === 'nosql') ? dbconnetcNoSql() : dbConnectMySql ();