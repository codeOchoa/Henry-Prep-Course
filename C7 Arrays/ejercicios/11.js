function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var multiploDos = array.map( (num) => { return num * 2 } );

  return multiploDos;
}

module.exports = duplicarElementos;
