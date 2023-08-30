


button.addEventListener('click',() => {
    button = check();
})

const check = () => {
    const button = document.getElementById('btn4')
const Name = document.myform.name.value
const Mail = document.myform.mail.value
const Password = document.myform.value
    if(Name != null && Password.lenght <= 8){
        alert("thank you for submitting")
    }
    else{
        alert("check the form twice")
    }
   
}