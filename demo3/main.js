document.querySelector("button").addEventListener("click", fn);

function fn() {
  const inp = document.querySelector("input");
  const out = document.querySelector("h3");

//   if (inp.value % 2 === 0) {
//     out.textContent = "Yay";
//   } else {
//     out.textContent = "Ne";
//   }
// }

out.textContent = (inp.value % 2 === 0 ? 'yay' : 'ne')

}