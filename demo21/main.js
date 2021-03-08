import data from "./data.js";

// const pigiau = data.filter( value => value.price <100);

// console.log(pigiau);

const sizeS = data.filter(value => value.size === "S")

console.log(sizeS);

const sizeM = data.filter(value => value.size === "M")

console.log(sizeM);

const sizeL = data.filter(value => value.size === "L")

console.log(sizeL);
