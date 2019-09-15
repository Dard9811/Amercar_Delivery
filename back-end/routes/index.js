var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb+srv://daniel:dard98031160243@amercar-p9oq8.mongodb.net/test?retryWrites=true&w=majority";/* "mongodb+srv://<username>:<password>@amercar-p9oq8.mongodb.net/test?retryWrites=true&w=majority"; */;
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

/* GET home page. */
router.get("/data", function(req, res, next) {

  readProductos(
    (prodcutos) => res.json(prodcutos),
    (err) => res.send(err)
  )

});

/* Post Usuarios*/
router.post("/post-user", function(req, res, next) {
  client.connect.then(
    (err) =>{
      if (err) {
        reject(err);
        throw err;
      }
      const db = client.db("amercar");
      const colUser = db.collection("usuarios");

      let data = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        contrasena: req.body.contrasena,
        direccion: req.body.dir,
        cedula: req.body.cedula,
        telefono: req.body.telefono
      }

      colUser.insertOne(data, function(err, collection){
        if (err) {
          reject(err);
          throw err;
        }

        console.log("Record inserted succesfuly", data)
      });
    }
  )
/*   return res.redirect("/"); */
})

module.exports = router;
