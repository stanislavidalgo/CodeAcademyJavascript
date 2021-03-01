document.body.style.backgroundColor = "aqua";


const sekcija = document.createElement('main');

// sekcija ===========
sekcija.style.backgroundColor = "white";
sekcija.style.maxWidth = "50rem";
sekcija.style.minHeight = "20rem";
sekcija.style.textAlign = "center";
sekcija.style.borderRadius = "1rem";
sekcija.style.margin = "10rem auto 5rem auto";

// nuotrauka ==========
const image = document.createElement('img');
image.style.height = "10rem";
image.style.width = "10rem";
image.style.objectFit = "cover";
image.style.borderRadius = "100%";
image.style.marginTop = "-5rem";


image.src = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/134989006_5610386142320628_761958712910963655_o.jpg?_nc_cat=101&ccb=3&_nc_sid=09cbfe&_nc_ohc=tYKBZYeyG3YAX8jdhLW&_nc_ht=scontent-arn2-1.xx&oh=cdd4798326daf3ac3ce20d9df0e384a9&oe=606192E6";



sekcija.append(image)
document.body.append(sekcija);