const todoInput = document.getElementById("todo");      // Id'si "todo" olan html etiketini todoInput değişkenine atadık 
let element;

element = todoInput;
element = todoInput.classList;              

todoInput.classList.add("newClass");        // todo etiketine "newClass" adında class eklenir
todoInput.classList.add("newClass2");       // "newClass2" adında ikinci class'ı bu şekilde ekleyebiliriz
todoInput.classList.remove("newClass2");    // "newCLass2" adındaki class'ı silme

element = todoInput;
element = todoInput.placeholder;                                        // place holder seçme yöntemi 1
element = todoInput.getAttribute("placeholder");                        // place holder seçme yöntemi 2
element = todoInput.setAttribute("placeholder", "newPlaceHolder");      // place holder alanını newPlaceHolder şeklinde değiştirdik
element = todoInput.setAttribute("title","new-title");                  // title alanını "new-title" şeklinde değiştirdik
element = todoInput.removeAttribute("name");                            // name alanını tamemen sildik


element = todoInput;
console.log(element);