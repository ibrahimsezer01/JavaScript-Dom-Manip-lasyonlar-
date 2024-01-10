// Replace
// <h5 class="card-title" id = "tasks-title">Todolar</h5>   Bunu aşşağıda oluşturalım



const cardbody = document.querySelectorAll(".card-body")[1];
const oldElement = document.getElementById("#tasks-title");
const newElement = document.createElement("h3");

newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent = "Yeni Todolar";


cardbody.replaceChild(newElement, oldElement);      // replace özelliği ilk sıraya yazılan değişkeni ikinci sıraya yazılan değişkenle değiştirir

console.log(newElement);