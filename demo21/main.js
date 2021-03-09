import data from "./data.js";
// 1
// const pigiau = data.filter( value => value.price <100);

// console.log(pigiau);
// 2
const sizeS = data.filter(value => value.size === "S")


const sizeM = data.filter(value => value.size === "M")



const sizeL = data.filter(value => value.size === "L")


const more = sizeS.concat(sizeM, sizeL);

console.log(more);




