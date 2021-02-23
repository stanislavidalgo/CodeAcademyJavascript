const name1 = "Jonas";

const name2 = "Kazys";

if(name1.length + name2.length > 10){
if(name1.length > name2.length){
    document.querySelector('h1').textContent = name1;
}else if(name1.length < name2.length){
    document.querySelector('h1').textContent = name2;

}
}

if(name1.length + name2.length <= 10) {
    document.querySelector('h1').textContent = 'abu vardai grazus';
}
