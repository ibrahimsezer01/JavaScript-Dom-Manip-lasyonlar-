const element = document.querySelector("#clear-todos");

/* 
console.log(element.className);
console.log(element.id);
console.log(element.classList);
console.log(element.classList[1]);
console.log(element.textContent);
console.log(element.innerHTML);
console.log(element.href);
*/


// Style ve element 


element.className = "btn btn-second";   // Bootstrap yüklü olduğu için burada class name değiştirerek css özelliklerini bootstrap üzerinden alacaz
element.style.color = "#000";           // renk ataması
element.style.marginLeft ="50px";
element.href = "https://www.youtube.com/";
element.target = "_blank";
element.textContent = "Silin";
element.textContent = "<span> delete </span>";  // Bu şekilde normal bi yazı gibi görünür
element.innerHTML = "<span style = 'color:blue'>Delete</span>"  // Bu şekilde etiket ile beraber style özelliği de ekleyebiliriz




/*
let element2 = document.querySelectorAll("li:last-child");  // Bize ilk değil son li etiketini getirir
element2 = document.querySelectorAll("li:nth-child(2)");    // 2.ci elemanı seçer
element2 = document.querySelectorAll("li:nth-child(3)")     // 3.cü elemanı seçer
element2 = document.querySelectorAll("li:nth-child(even)"); // çift olarak gidenleri alır 2,4,6
element2 = document.querySelectorAll("li:nth-child(odd)");  // tek sayı olarak gidenleri alır 1,3,5

element2.forEach(function(el){
    el.style.color = "red";
    el.style.backgroundColor = "blue";
})
*/

const elements = document.querySelectorAll(".list-group-item"); // Node list

elements.forEach(function(el){
    el.style.color = "red";
    el.style.backgroundColor = "blue";
})






// console.log(element2);