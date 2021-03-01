const ul = document.createElement("ul");

const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
li1.textContent = "pirmas";
li2.textContent = "antras";
li3.textContent = "trecias";

ul.append(li1, li2, li3);

document.body.append(ul);