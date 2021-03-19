document.forms.add.addEventListener('submit',e => {
    e.preventDefault();

    const name = e.target.elements.name.value.trim();
    const year = Number(e.target.elements.year.value);
    const location = e.target.elements.location.value;

    const wines = JSON.parse(localStorage.getItem('wines')) || [];

    wines.push({name, year, location});

    localStorage.setItem('wines', JSON.stringify(wines))
    
    
})