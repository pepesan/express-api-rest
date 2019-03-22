var express = require('express');
var router = express.Router();

/* GET libros devuelve un listado de libros. */
router.get('/', function(req, res, next) {

  //coger de bbdd el listado de libros
  var listado=[
    {
      autor:"Buenos presagios",
      titulo:"Terry Pratchett & Neal Gaiman",
      isbn:"123456576779789"
    },
    {
      autor:"El color de la magia",
      titulo:"Terry Pratchett",
      isbn:"21324523546524674"
    },
    {
      autor:"El señor de los anillos: La compañía del anillo",
      titulo:"J.R.R. Tolkien",
      isbn:"213124135356347"
    }
  ];
  res.json(listado);
});
/* Post debe permitir dar de alta un libro */
router.post('/', function(req, res, next) {
  //datos como query (parametors)
  //console.log(req.query);
  //var libro=req.query;
  // Datos dentro del body
  console.log(req.body);
  var libro=req.body;
  // dar de alta en bbdd el libro
  res.json(libro);
});
/* Get /:isbn devolver el libro que le indico con isbn */
router.get('/:isbn', function(req, res, next) {
  // recoger el parámetro por url
  var isbn=req.params.isbn;
  //console.log(isbn);
  //consultar a la bbdd para buscar el libro con ese isbn
  var libro={
    "autor": "Terry Pratchett",
    "titulo": "Dioses Menores",
    "isbn": "12312454554"
  };
  res.json(libro);
});
/* POST/PUT /:id modificar el libro con id */
router.put('/:id', function(req, res, next) {
  // recoger el parámetro por url
  var isbn=req.params.isbn;
  //Recoger los datos del libro
  // Datos dentro del body
  console.log(req.body);
  var libro=req.body;
  //modificar en la bbdd el libro con ese isbn
  //devolver el libro modificado
  res.json(libro);
});
/* Get/Detele /:id/delete borrar el libro que le indico con id */
router.delete('/:id', function(req, res, next) {
  // recoger el parámetro por url
  var isbn=req.params.isbn;
  // borrar el libro de la bbdd
  var libro={
    "autor": "Terry Pratchett",
    "titulo": "Dioses Menores",
    "isbn": "12312454554"
  };
  // devolver el libro borrado
  res.json(libro);
});

module.exports = router;
