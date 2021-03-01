const data = JSON.parse(
    '{"results":[{"gender":"female","name":{"title":"Mrs","first":"Liliam","last":"Monteiro"},"location":{"street":{"number":1267,"name":"Avenida da Democracia"},"city":"Nilópolis","state":"Distrito Federal","country":"Brazil","postcode":59635,"coordinates":{"latitude":"-70.2482","longitude":"13.2168"},"timezone":{"offset":"-3:00","description":"Brazil, Buenos Aires, Georgetown"}},"email":"liliam.monteiro@example.com","login":{"uuid":"99652093-8477-43bd-9084-f46458b5e74c","username":"crazyzebra374","password":"laurel","salt":"rDDpU3vb","md5":"2fbcdb17e07e566514445a2a543fe66e","sha1":"13d2a86bf1e25079855c0001e58ec1dce8ee081f","sha256":"eb86beaac6cc806985a21eb630bfa855ee5d8730a0c96a39c2ce073ab9e845b5"},"dob":{"date":"1968-01-21T14:41:58.563Z","age":53},"registered":{"date":"2006-08-18T01:03:40.262Z","age":15},"phone":"(57) 3943-8556","cell":"(16) 9610-8207","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/34.jpg","medium":"https://randomuser.me/api/portraits/med/women/34.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/34.jpg"},"nat":"BR"}],"info":{"seed":"5c94565ba3700eea","results":1,"page":1,"version":"1.3"}}'
  );
  
  console.log(data.results)
  
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
image.src = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/134989006_5610386142320628_761958712910963655_o.jpg?_nc_cat=101&ccb=3&_nc_sid=09cbfe&_nc_ohc=tYKBZYeyG3YAX8jdhLW&_nc_ht=scontent-arn2-1.xx&oh=cdd4798326daf3ac3ce20d9df0e384a9&oe=606192E6";
image.alt = "stanislav-img"
image.style.height = "10rem";
image.style.width = "10rem";
image.style.objectFit = "cover";
image.style.borderRadius = "100%";
image.style.marginTop = "-5rem";


// h1================
const h1 = document.createElement('h1');
h1.textContent = "Stanislav Idalgo";

// p

const adresas = document.createElement('p');
adresas.textContent = "T.Kosciuskos 26";



sekcija.append(image, h1, adresas)
document.body.append(sekcija);