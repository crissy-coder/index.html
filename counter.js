const increment = document.getElementById('btn1')
const decerement  = document.getElementById('btn2')





increment.addEventListener('click', () => {
   increment = Incrementer();
});

decerement.addEventListener('click',() => {
    decerement = decerementer()
});

var Valuein  = 0;
const Incrementer = () => {
    const num = document.getElementById('value')
  Valuein = Valuein +1;
  num.innerHTML = Valuein;    
}

const decerementer = () => {
    const num = document.getElementById('value')
    const body = document.getElementById('body')

    Valuein = Valuein -1
    if(Valuein <= 0){
        // alert("the value below 0 cause SYSTEM DAMAGE !!")
        Valuein  = 0
        
    }
    
    num.innerHTML = Valuein;
    
}


const sumbit = document.getElementById("submit")

submit