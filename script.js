'use strict';
const menushadowMobile = document.querySelector('.menubox');
const menuMobile = document.querySelector('.menu');
const menuimg = document.querySelector('.menuimg');
const closeimg = document.querySelector('.closeimg');
const headmenu = document.querySelector('.headmenu');
const menuMobDesk = document.querySelector('.menuMobDesk');
const buttonFordropdownContent = document.querySelectorAll('.dropbtn');
const dropdownContent = document.querySelectorAll('.dropdown-content');
const arrow = document.querySelectorAll('.arrow');


menuimg.addEventListener('click',()=>{
    menushadowMobile.style.display='grid';
    menuMobile.style.display='grid';
});
menushadowMobile.addEventListener('click',()=>{closeMenuMobile();});
closeimg.addEventListener('click',()=>{closeMenuMobile();});    
function closeMenuMobile(){
    menushadowMobile.style.display='none';
    menuMobile.style.display='none';
}

let screensize = window.matchMedia("(min-width: 900px)")
function myFunctionMedia(screensize) {
    if (screensize.matches) { //desktop
        headmenu.classList.replace("head","snapdesktop");
        menuMobDesk.classList.replace("menu","menudesktop");
        menushadowMobile.style.display='none';      
        menuMobDesk.style.display='grid';
      
    } else { //mobile
        headmenu.classList.replace("snapdesktop", "head");
        menuMobDesk.classList.replace("menudesktop", "menu");
        menuMobDesk.style.display='none';  
    }
}
    myFunctionMedia(screensize);
    screensize.addEventListener("change", function() {
    myFunctionMedia(screensize);
});

for (let i = 0; i < buttonFordropdownContent.length; i++) {
    buttonFordropdownContent[i].addEventListener("click", function() { 
    this.nextElementSibling.classList.toggle("displayGrid");
    this.childNodes[1].classList.toggle("arrowRotate");  
});}

document.addEventListener("click", function(e) {
    e.preventDefault();
    for (let j = 0; j < dropdownContent.length; j++) {   
        if (dropdownContent[j].classList.contains("displayGrid")==true 
        && e.target !== dropdownContent[j] 
        && e.target !== buttonFordropdownContent[j]
        && screensize.matches)
        {dropdownContent[j].classList.remove("displayGrid");
        arrow[j].classList.remove("arrowRotate");
        }        
    }   
});

