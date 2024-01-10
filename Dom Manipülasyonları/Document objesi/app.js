// Window object 
let value;
value = document;                                   // Bunu yapmak yerine aşşadakini yap
let elements = document.getElementsByTagName("*");
// let elements = document.querySelectorAll("*");   // Buda kullanilabilir
// Yukardakiler html collection sınıfındadır


/*
//  Aşşağıdaki kodlar artık desteklenmiyor 
value = document.all;
value = document.all.length;
value = document.all[0];
value = document.all[6];
value = document.all[document.length - 1];
*/

//  Yukarıda ki kod satırları yerine bunu yaz

/* 
// Tüm elemanlara ulaşmak için
let elements = document.getElementsByTagName("*");      // document içindeki verileri elements değşkenine atıyoruz
// veya
// var elements = document.querySelectorAll("*");
*/

// Son elemana ulaşmak için
let lastElement = elements[elements.length - 1];        // LastElement'e ulaşmak için elements'e atadığımız document dosyalarını
                                                        // kullanıp uzunluğu hesapladıktan sonra -1 ile toplamamız gerek
// lastElement'ı kullanabilirsiniz
// console.log(lastElement);

value = elements.length;                                // Bu da uzunluk ölçer yani kaç harf, rakam, boşluktan oluştupunu ölçer


/* 
for( let i = 0 ; i < elements.length ; i++ ) {          // döngü oluşturarak sırasıyla tüm element elemanlarını yazar
    console.log(elements[i]);
}
*/


 
/*
elements.forEach(function(element){                     // Bunu bu şekilde yazdığımızda hata verir html collection olduğu için
    console.log(element);                               // html collection'u array şeklinde çevirmemiz lazım
});
*/

/* 
const collections = Array.from(document.getElementsByTagName("*"));     // html collection üzerinde gezinmek için ilk başta array'e çevirmek gerekiyor

collections.forEach(function(collection){
    console.log(collection);
});
*/

// value = document.getElementsByTagName("body");
// value = document.querySelectorAll("body");
// value = document.body;
value = document.location.hostname;
value = document.location.port;
value = URL;
value = document.characterSet;

console.log(value);
