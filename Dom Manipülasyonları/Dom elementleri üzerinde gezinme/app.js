let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

value = cardrow;

value = todoList.childNodes;                // 9 adet eleman olduğunu gösteriyor bunun sebebi ise texleri (satır atlama dahil) beraberinde saymasından dolayıdır
value = todoList.childNodes[0];             // Bunun yerine children kullanılrsa sadece elementleri sıralar
value = todoList.children;                  // Burada listemizde ki 4 elementi de sıraladı
value = todoList.children[2];
value = todoList.children[1].textContent = "Değiştirildi";

value = cardrow.children;                   // Bu arada bi alt dizindeki elemenleri alır
value = cardrow.children[2].children;       // Bu bi altın bi altı
value = cardrow.children.length;            // elementlerin toplamı
value = cardrow.childElementCount;          // elementlerin toplamı

value = cardrow.parentElement;              // Bi üst dizini almış oluyoruz
value = cardrow.parentElement.parentElement;

value = todo.previousElementSibling;        // aynı dizinde olan bi geride ki kardeş elemana gitmek için kullanılır
value = todo.nextElementSibling;            // bu dayı bi sonra ki kardeş element için
value = todo.nextElementSibling.nextElementSibling; // bu da iki ileri kardeş eleman
value = todo.previousElementSibling.previousElementSibling; // iki geride ki eleman olmadığı iççin null değeri çevirir

console.log(value);
