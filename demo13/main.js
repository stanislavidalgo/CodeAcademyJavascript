document.querySelector("form").addEventListener("submit", fn);



function fn(event) {
  event.preventDefault();

  const data = document.querySelector("input").value;

  const h1 = document.createElement("h1");

  h1.textContent = data;
  document.body.append(h1);
}