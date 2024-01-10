// Elementi Id'ye göre seçme

let element;

element = document.getElementById("todo-form");     // yanlış bi isim verilirse null değeri gelir
element = document.getElementById("tasks-title");


// Elementi class'a göre seçme

element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("card-header");


// Elementi Tag'e göre seçme

element = document.getElementsByTagName("li");


// Query selector - Css selector (sayfadaki tek elementi seçiyor)-(ilk bulduğu elementi seçiyor)

element = document.querySelector("#todo-form");     // Id için kullanılabilir çünkü bir Id iki farklı etiket için kullanılamaz
element = document.querySelector("#tasks-title");

element = document.querySelector(".list-group-item");

element = document.querySelector("li");             // li etiklerinden ilk olanı seçiyoruz
element = document.querySelector("div");            // div etiketlerinden ilk olanı seçiyoruz


// Query selector all

element = document.querySelectorAll(".list-group-item");    // Bize bir node list oluşturur bunu da foreach içinde kullanabiliriz

element.forEach(function(x){                        // element değişkenimiz nodelist halinde olmasaydı eğer forech üzerinde kullanamzdık
    console.log(x);
})

console.log(element);