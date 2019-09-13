var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

/* GET home page. */
router.get("/data", function(req, res, next) {

  client.connect(
    () =>{
      const db = client.db("amercar");
      const colProducto = db.collection("producto");

      colProducto.find({}).limit(10).toArray(
      (err, productos) => {
        if (err) throw err;

        console.log("# Productos: ", productos.length);
      }
      );

      client.close();
    }
  );
});

module.exports = router;
