const searchfield = document.getElementById('search')
const menu = document.getElementById('menu') .getElementsByTagName('li')



searchfield.addEventListener('input',() => {


const searchInput = searchfield.value.toLowerCase();

for(let i = 0; i < menu.length; i++) {

const songsname = menu[i].innerText.toLowerCase();

if(songsname.includes(searchInput)){
     menu[i].style.display = "block";

}
else{
    menu[i].style.display = "none"
}


}




}) 