document.forms.login.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = e.target.elements.email.value.trim();
  const password = e.target.elements.password.value;

  const arr = JSON.parse(localStorage.getItem("login"));


  if(arr.some(v => v.email === email) && arr.some(v => v.pass === password)) {
    document.location.replace('view.html')
    
  }else{
    alert("wrong pass or email")
    
  }


});
