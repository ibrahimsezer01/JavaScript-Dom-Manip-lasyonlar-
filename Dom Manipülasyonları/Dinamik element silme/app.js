// Dinamik element silme

const todoList = document.querySelector("ul.list-group");           // ul etiketinden list-group class'ı
const todos = document.querySelectorAll("li.list-group-item");      // li etiketinden list-group-item class'ı


// Remove metodu

// todos[1].remove();



// Remove Child

// todoList.removeChild(todoList.lastElementChild);    // todoList içinde ki child elementinin sonuncusunu sil
todoList.removeChild(todos[3]);


console.log(todos);
console.log(todoList);