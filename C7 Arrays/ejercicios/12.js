function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let newArray = [];
  
  for (let i = 0; i < array.length; i++)  {
    if  (typeof array[i] === "string")  {
      newArray.push(array[i].toUpperCase());
    } else  {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

module.exports = convertirStringAMayusculas;
