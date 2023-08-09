const valorOriginal = document.getElementById("valororiginal");
const porcentaje = document.getElementById("porcentaje");
const botonCalcular = document.getElementById("botoncalcular");
const resultado = document.getElementById("resultado");
const sumado = document.getElementById("sumado");
const restado = document.getElementById("restado");


botonCalcular.addEventListener("click", () => {
  const valorOriginalnum = parseFloat(valorOriginal.value);
  const porcentajenum = parseFloat(porcentaje.value);

  if (!isNaN(valorOriginalnum) && !isNaN(porcentajenum)) {
    const resultadoporcentaje = (valorOriginalnum * porcentajenum) / 100;
    const resultadosumado = valorOriginalnum+resultadoporcentaje
    const resultadorestado = valorOriginalnum-resultadoporcentaje
    resultado.textContent = `El ${porcentajenum}% de ${valorOriginalnum} es ${resultadoporcentaje}`;
    sumado.textContent = `Sumado a original ${resultadosumado}`;
    restado.textContent = `Restado a original ${resultadorestado}`;

  } else {
    resultado.textContent = "Ingresa valores válidos.";
  }
});

