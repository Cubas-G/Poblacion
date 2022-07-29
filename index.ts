import { Container } from "./Poblacion";
import { demografia } from "./Poblacion";

function mas_pob() {
  const array: number[] = demografia.map((value: Container) => value[2022]);
  const maximo: number = Math.max(...array);
  const resultado: Container[] = demografia.filter(
    (value: Container) => value[2022] === maximo
  );
  return resultado;
}

function menospoblada() {
  const array: number[] = demografia.map((value: Container) => value[2022]);
  const minimo: number = Math.min(...array);
  const resultado: Container[] = demografia.filter(
    (value: Container) => value[2022] === minimo
  );
  return resultado;
}

function ciudadesOrdenadas() {
  const array: string[] = demografia.map((value: Container) => value.name);
  const resultado = array.sort();
  return resultado;
}

function por_cantidad_de_pesonas() {
  const resultado = demografia.sort((a, b) => b[2022] - a[2022]);
  return resultado;
}

console.log("Cuidad con mayor Poblacion:", mas_pob());
console.log("Cuidad con menor Poblacion:", menospoblada());
console.log("Cuidades en orden alfabetico:", ciudadesOrdenadas());
console.log(
  "Cuidades ordenadas por cantidad de personas:",
  por_cantidad_de_pesonas()
);
