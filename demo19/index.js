const table = document.createElement('table');
table.classList.add('container');
document.body.append(table);
document.forms.add.addEventListener("submit", (e) => {
    (e).preventDefault();
  
    const fullName = e.target.elements.author.value.trim();
    const firstName = fullName.split(" ")[0];
    const firstLetter = firstName.split("")[0].charAt(0).toUpperCase();
    const lastName = fullName.replace(firstName, "").toUpperCase().trim();

    // ====== viso vardo outputas =======

    const shortName = firstLetter + "." + lastName;

    //===============================

    const title = e.target.elements.title.value.trim();
    const date = e.target.elements.date.value.trim();
    const price = e.target.elements.price.value.trim();
  
    
    const person = {
        fullName: shortName,
        title: title,
        date: date,
        price: price,
    };
    
  displayItem(person);
  });
  

  function displayItem(obj) {
      const tr = table.insertRow();

      const td1 = tr.insertCell();
      td1.textContent = obj.fullName;

      const td2 = tr.insertCell();
      td2.textContent = obj.title;

      const td3 = tr.insertCell();
      td3.textContent = obj.date;

      const td4 = tr.insertCell();
      td4.textContent = obj.price;
  }

  