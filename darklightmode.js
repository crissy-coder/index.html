const text = document.getElementById('text');
const button = document.getElementById('btn')
const body = document.querySelector('body')



button.addEventListener('click', () => {

button = DarkMode();

});

 dark = false;
const DarkMode = () => {
   if(dark){
    body.style.backgroundColor = "white";
    text.innerHTML = "light mode"
    text.style.color = "black"
    dark = false;
   

   }
   else{
    body.style.backgroundColor = "#373535";
    text.innerHTML = "dark mode";
    text.style.color = "white";
   
    dark = true;
   
   
   

   }
} 

