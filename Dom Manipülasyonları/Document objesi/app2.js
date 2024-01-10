let value;

value = document;

// Scriptler

value = document.scripts;
value = document.scripts[0];
value = document.scripts.length;


// Links

value = document.links;
value = document.links[0];
value = document.links[document.links.length - 1];
value = document.links[document.links.length - 1].getAttribute("class");
value = document.links[document.links.length - 1].getAttribute("href");
value = document.links[document.links.length - 1].className;
value = document.links[document.links.length - 1].classList;



// Formlar

value = document.forms;
value = document.forms.length;
value = document.forms[0];
value = document.forms["form1"]; // form etiketlerinden name="form1" olanı seçer yoksa boş değer atar 
value = document.forms[0].id;                   // aynı 
value = document.forms[0].getAttribute("Id");   // aynı
value = document.forms[0].method;

console.log(value);