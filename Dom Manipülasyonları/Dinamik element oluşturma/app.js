// Yeni html elementi ekleme 

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>   Bunu eklemeyi deneyelim

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";


// Text Content

// cardbod.textContent = "asdasdasad";     // Bu şekilde card body içerisinde bulunan tüm herşey silinir ve sadece asdasdasad yazısı kalır


// Text note

/*
const text = document.createTextNode("Hii");
cardbody.appendChild(text);
console.log(cardbody);
// Bu sayede içersiinde ki diğer etiketler text'ler silinmez
*/

newLink.appendChild(document.createTextNode("Farkli bir sayfaya git"));


cardbody.appendChild(newLink);
console.log(newLink);