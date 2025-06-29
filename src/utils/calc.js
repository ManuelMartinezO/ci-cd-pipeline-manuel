function suma(a, b) {
  return a + b;
}
function resta(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}
function div(a, b) {
  if (b === 0) throw new Error("División por cero no permitida");
  return a / b;
}

module.exports = { suma, resta, mult, div };
