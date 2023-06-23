let imgObj1 = null;  
function init() {  
   imgObj1 = document.getElementById('header-logo-link');  
   imgObj1.style.position= 'relative';   
   imgObj1.style.left = '0px';   

}  
function rotate3() {  
   imgObj1.style.transform = "rotate(3deg)";  
}  

function rotate0() {  
  imgObj1.style.transform = "rotate(0deg)";  
}  


window.onload = init; 