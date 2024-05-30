function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  if  (array.length === 0)  {
    return true;
  }
  let primerElemento = array[0];

  for (let i = 1; i < array.length; i++)  {
    if  (array[i] !== primerElemento)  {
      return false;
    }
  }
  return true;
}

module.exports = todosIguales;
