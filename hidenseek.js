const button = document.getElementById('btn5')
const Text = document.getElementById('text')

button.addEventListener('click',() => {
    button = shower();
})


let index = false;
const shower = () => {
    const image = document.getElementById('image')
    
   if(index){
    
    image.src = "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    Text.innerHTML = "Displyed";
   index = false;
   }
 
   else{
    image.src = ""
     Text.innerHTML = "HIDDEN";
    index = true;
   }

}