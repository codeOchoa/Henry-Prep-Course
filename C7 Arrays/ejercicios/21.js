function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  const ordenDeseado = ['Marzo', 'Noviembre', 'Enero'];

  const arrayFiltrado = array.filter(mes => ordenDeseado.includes(mes));

  arrayFiltrado.sort((a, b) => ordenDeseado.indexOf(a) - ordenDeseado.indexOf(b));

  if  (arrayFiltrado.length === ordenDeseado.length && arrayFiltrado.every((val, index) => val === ordenDeseado[index]))  {
    return arrayFiltrado;
  } else  {
    return "No se encontraron los meses pedidos";
  }
}

module.exports = mesesDelAño;
