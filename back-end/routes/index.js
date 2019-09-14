var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017"/* "mongodb+srv://<username>:<password>@amercar-p9oq8.mongodb.net/test?retryWrites=true&w=majority"; */;
const client = new MongoClient(url);

function readProductos(resolve, reject){
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

function postUser(resolve, reject){
  client.connect.then(
    (err) =>{

    }
  )

}

/* GET home page. */
router.get("/data", function(req, res, next) {

  readProductos(
    (prodcutos) => res.json(prodcutos),
    (err) => res.send(err)
  )

});

router.post("/post-user", function(req, res, next) {

})

module.exports = router;
