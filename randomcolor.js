// const button = document.getElementById("btn");
// const colorcode = document.getElementById("text")

// const AlpaNum = ["1","2","3","4","6","5","6","7","8","9","A","B","C", "E"]



// button.addEventListener('click',() => {


//     const hexvalue = generateranomcolor()
//     document.body.style.backgroundColor = hexvalue;
//     colorcode.textContent = hexvalue;

// });

// function generateranomcolor(){
//     let hexvalue = "#";
//     for(let i=0;i<6;i++){
//         hexvalue += AlpaNum[random()]
        
//     }
//     return hexvalue;   
   
    
// }

// const random = () => {
// return Math.floor(Math.random()*AlpaNum.length)
// }


// const button = document.getElementById("btn");
// const colorcode = document.getElementById("text")
// const AlpaNum = ["1","2","3","4","5","6","7","a","b","c","e","f"]

// button.addEventListener('click',() => {
//     const colorCode = generater()
//    document.body.style.backgroundColor = colorCode;
// })


// generater = () => {
//    let colorcode = "#";
//     for(i=0;i<6;i++){
//         colorcode += AlpaNum[ran()]
//     }
//     return colorcode
// }

// const ran = () => {
//   return Math.floor(Math.random()*AlpaNum.length)
// }

// const AlpNum = ["1","2","3","4","5","6","7","a","b","c","e","f"]
// const Element = document.getElementById("text")
// const Element2 = document.getElementById("text2")
// const button = document.getElementById("btn")
//  const interval = setInterval(function(){
//  Element.textContent += random()

// },1000)

// const random = () => {
//   return Math.floor(Math.random()*AlpNum.length)
// }

// console.log("heloo")

// button.addEventListener('click', () => {
//  const bloger = stoper()
// })

// const stoper = () => {
//   clearInterval(interval)

 

   


//  } 
  // const total = ""
  // for(let varr of interval){
  //   for(let i=0;i<5;i++){
  //     total += varr[i];
  //   }
    

  // }
  // console.log(`reached the limit`);


// const fill  = document.getElementById("fill")
// const mybar = document.getElementById("mybar")

// fill.addEventListener('click', () => {

//   const movebar = moveing()
// });

// const moveing = () => {
 
//   let width = 0;
//   const id = setInterval(frame,10)
//   function frame(){
//     if(width == 100){
//       clearInterval(id);
//     }
//     else{
//       width++;
//       mybar.style.width = width + '%';
//     }
//   }

// }


// let num = [2,3,4,5,6]

// let even = num.filter(function(Element){
//   return Element%2 == 0
// })
// console.log(even)


// let NewArray = num.map(function(e){
//   return e+1
// })
// console.log(NewArray)



// num.forEach(function(elementor){
//   console.log(elementor)
// })


// const button = document.getElementById('btn2');

// button.addEventListener('onclick', () => {
//   // button = changeimage()
// })
// const changeimage= () => {
//   const image = document.getElementById("tiggerimage")
//   // image.src = "https://img.freepik.com/premium-photo/soft-air-wavy-design-element-hot-red-cold-blue-colors_1053-7379.jpg?w=360"

//   if(image.src == "https://img.freepik.com/premium-photo/soft-air-wavy-design-element-hot-red-cold-blue-colors_1053-7379.jpg?w=360" ){
//     image.src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
//   }
//   else{
//     image.src = "https://img.freepik.com/premium-photo/soft-air-wavy-design-element-hot-red-cold-blue-colors_1053-7379.jpg?w=360"
//   }

 
// }

let nextbtn = document.getElementById('btn3');
let prebtn = document.getElementById('btn4')

nextbtn.addEventListener('click',() => {
  // nextbtn = Nextimage();
});

let index = 0;
const gallery = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAYEcj6iv6GGECOVuSaArw-66Nx65vt3YJTA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9dSN5nY32fQxuBQ0Q2G_nyqfEzrI2uG4nYtyIjLTRci-e5wslNX4owXdyEBcpUedvpNY&usqp=CAU","https://i.pinimg.com/originals/b7/f0/49/b7f0496ff8dcabe82bde21abfdf620b0.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ88Wg11VqQOXh6qUYqpN9n7w_YpS9xBEyKAlRjiwguaO-cOod8gxORZF1mVBdv6wshl4&usqp=CAU","https://img.freepik.com/free-photo/amazing-ants-carry-fruit-heavier-than-their-bodies-amazing-strong-ant_488145-2669.jpg"]

const nextimage = () => {

let images = document.getElementById('tiggerimage');
index = index+1;
images.src = gallery[index]
//console.log(gallery.length)

if(index == 4){
  index = 0;
}


}

const previousimage = () => {
  let images = document.getElementById('tiggerimage');
  index = index-1;
  images.src =gallery[index]
  if(index == 0)
 index = 5;
}