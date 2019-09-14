var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

function readProductos(resolve, reject){
  const client = new MongoClient(url);
  client.connect(
    (err) =>{
      if (err) {
        reject(err);
        throw err;
      }
      const db = client.db("amercar");
      const colProducto = db.collection("producto");

      colProducto.find({}).limit(12).toArray(
          (err, productos) => {
            if (err) {
              reject(err);
              throw err;
            }
            resolve(productos)

            client.close();
          });
    }
  );

}

/* GET home page. */
router.get("/data", function(req, res, next) {

  readProductos(
    (prodcutos) => res.json(prodcutos),
    (err) => res.send(err)
  )

});

module.exports = router;
