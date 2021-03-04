document.forms.add.addEventListener('submit', (e) =>{
    (e).preventDefault();

const fullName = e.target.elements.namez.value;
const price = e.target.elements.numberz.value;

const firstName = fullName.split(' ')[0];
const lastName = fullName.split(' ')[1];
const table = document.querySelector('tbody');

const tr = table.insertRow();

const td1 = tr.insertCell()
td1.textContent = firstName;

const td2 = tr.insertCell();
td2.textContent = lastName;

const td3 = tr.insertCell();
td3.textContent = price.toFixed(2)
});