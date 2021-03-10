

import data from "./data2.js";
console.log(data);

const container = document.createElement("div");
container.style.width = "50%";
container.style.margin = "0 auto";

const h1 = document.createElement("h1");
h1.textContent = "Top Rated Movies";
h1.style.borderBottom = "1px solid black";
container.append(h1);

const table = document.createElement("table");
table.style.width = "100%";
table.style.borderCollapse = "collapse";

const tableHeader = table.insertRow();
const th1 = tableHeader.insertCell();
const th2 = tableHeader.insertCell();
th2.textContent = "Rank & Title";
const th3 = tableHeader.insertCell();
th3.textContent = "IMDB Ranking";

data.forEach((movie, index) => {
  const tr = table.insertRow();
  if (index % 2 === 0) tr.style.background = "#eee";

  const td1 = tr.insertCell();
  const image = document.createElement("img");
  image.src = movie.image;
  image.alt = movie.title;
  image.style.width = "40px";
  image.style.height = "60px";
  image.style.objectFit = "cover";
  td1.append(image);

  const td2 = tr.insertCell();
  td2.textContent = `${index + 1}. `;
  const link = document.createElement("a");
  link.href = movie.link;
  link.textContent = movie.title;
  const yearSpan = document.createElement("span");
  yearSpan.textContent = ` (${movie.year})`;
  td2.append(link, yearSpan);

  const td3 = tr.insertCell();
  td3.textContent = movie.rating;
});

container.append(table);
document.body.append(container);
