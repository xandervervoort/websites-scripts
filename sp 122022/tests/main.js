// global varia
let page;
let select;
let menu;
// functions
document.body.onload  = main() , check();

function main() {
    //create
page = document.createElement("div");
select = document.createElement("select");
let option1 = document.createElement("option");
let option2 = document.createElement("option");
menu = document.createElement("div");
let p = document.createElement("p");

//context
page.classList.add("page");
page.id = "page";
select.addEventListener(("mouseleave"), ()=>{change()});
select.id = "bg-color";
option1.value = "1";
option2.value = "2";
option1.textContent = "main";
option2.textContent = "second";
menu.id = "menu";
p.textContent = "boo"
//add to page
document.body.appendChild(page);
page.appendChild(menu);
menu.appendChild(p);
page.appendChild(select);
select.appendChild(option1);
select.appendChild(option2);
}

// css
function check() {
    let r = document.querySelector(':root');
if(localStorage.getItem("page_background") == null) {
    localStorage.setItem("page_background", "#0f4c81");
    localStorage.setItem("text_color", "#FFD700");
    localStorage.setItem("menu_color", "#40e0d0");
}else{
    let page_background = localStorage.getItem("page_background");
    let text_color = localStorage.getItem("text_color");
    let menu_color = localStorage.getItem("menu_color");
    r.style.setProperty('--page_background', page_background);
    r.style.setProperty('--text_color', text_color);
    r.style.setProperty('--menu_color', menu_color);
}
}

function change() {
let r = document.querySelector(':root');
let wich = document.getElementById("bg-color").value
if(wich == 1){

localStorage.setItem("page_background", "#0f4c81");
let page_background = localStorage.getItem("page_background");
r.style.setProperty('--page_background', page_background);

localStorage.setItem("text_color", "#FFD700");
let text_color = localStorage.getItem("text_color");
r.style.setProperty('--text_color', text_color);

localStorage.setItem("menu_color", "#40e0d0");
let menu_color = localStorage.getItem("menu_color");
r.style.setProperty('--menu_color', menu_color);

}else if(wich == 2){
    localStorage.setItem("page_background", "#000000");
    let page_background = localStorage.getItem("page_background");
    r.style.setProperty('--page_background', page_background);
    
    localStorage.setItem("text_color", "#008080");
    let text_color = localStorage.getItem("text_color");
    r.style.setProperty('--text_color', text_color);
    
    localStorage.setItem("menu_color", "#FFFFFF");
    let menu_color = localStorage.getItem("menu_color");
    r.style.setProperty('--menu_color', menu_color);
}else{
    localStorage.setItem("page_background", "#0f4c81");
    localStorage.setItem("text_color", "#FFD700");
    localStorage.setItem("menu_color", "#40e0d0");
}
}



