const express = require('express');
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "servicio2",
  password: "servicio2.123",
  database: "API"
});

connection.connect();


app.put('/rest/archivos', function (req, res) {
   connection.query('UPDATE `Archivos` SET `Nombre_del_archivo`=?, `Fecha_que_se_creo`=? , `Tamaño`=? where `Id_Archivo`=?', [req.body.Nombre_del_archivo,req.body.Fecha_que_se_creo,req.body.Tamaño,req.body.Id_Archivo], function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
});


app.listen(2000, function () {
 console.log('Node app is running on port 2000');

});  