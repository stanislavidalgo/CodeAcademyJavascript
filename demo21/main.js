import data from "./data.js";
// 1
// const pigiau = data.filter( value => value.price <100);

// console.log(pigiau);
// 2
// const sizeS = data.filter(value => value.size === "S")


// const sizeM = data.filter(value => value.size === "M")



// const sizeL = data.filter(value => value.size === "L")


// const more = sizeS.concat(sizeM, sizeL);

// console.log(more);

// 3


// const maleL = data.filter(value => value.gender === "Male" && value.size === "L");
// const maleXl = data.filter(value => value.gender === "Male" && value.size === "XL");
// const maleBig = maleL.concat(maleXl);
// console.log(maleBig);

// 4

const ifMale = data.every( value => value.gender === "Male" || value.gender === "Female")
console.log(ifMale);






