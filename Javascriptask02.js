
         //checking user is present or not

// let allusers = ["vikas" ,"satya", "sai","kumar","praveen","adthiya","aksho","kishore","chintu"]

// function username(User){
//   if(allusers.includes(User)){
//     console.log(`i am present man`);
//   }
//   else{
//     console.log("mam ! he is adsent");
//   }
// }

// username("vikas")

             // calculating user cart priceing
 
// function pricelist(){
//     let total = 0;
//     for(let i = 0;i < arguments.length;i++){
//         total += arguments[i]
//     }
//     console.log(`total bill is ${total}`)
// }
// pricelist(30,52,8,250,16);


         // checking username and marks 

// const students = [
//     {
//         name : "vikas",
//         marks : 85,
//     },
//     {
//         name : "kishore",
//         marks : 96,
//     },
//     {
//         name : "adthiya",
//         marks : 90,
//     },
//     {
//         name : "chintu",
//         marks : 98,
//     }
// ];

// function filter(Name){
 
//      for(let student of students){
//         if(student.name === Name ){
//             if(student.marks < 90){
//                 console.log("great student")
//             }
//             else{
//                 console.log("keep your effects hard")
//             }
            
  
//         }
//         console.log("check the username")
        
//      }
     
// }
// filter("vikass")



                       //printing keys and values


// const products = {
//     brand : "Apple 23",
//     model : "HD0.5",
//     charge : "9hr",
//     warrenty : "3years",

// }


//     for(let keys of Object.keys(products)){
//         console.log(`${keys} : ${products[keys]}`)
        
//     }


      // checking the cost in diffrent products 

// const products = [
//     {
//         product : "apple",
//         cost : 2000,
//     },
//     {
//         product : "amazon",
//         cost : 1800,
//     },
//     {
//         product : "realme",
//         cost : 1950,
//     }, 
//     {
//         product : "lg",
//         cost : 850,
//     },
//     {
//         product : "samsung",
//         cost : 999,
//     }
// ];


// const price = (min) =>{
//     for(let gagets of products){
//         if(gagets.cost > min){
//             console.log(`${gagets.product} is high cost`)
//         }
//         else{
//             console.log(`${gagets.product} is normal cost`)
//         }
//     }
// }

// price(1000)

// printing Guesst list with coustem seperater ,

// const guest = ["vikas", "sai", "kishore", "chintu","adthiya","Balu", "Vijya","Raju","kumar","praveen"]

// console.log(guest.join(", "));


// OTP GENERATER

// function OTP(){
    
//     let OTPGenerater = "";
//     const value = "1234567890";
//         for(let i = 0; i < 4; i++){
//             OTPGenerater +=  value[Math.floor(Math.random()*7)]
//            }
//            console.log(OTPGenerater)
//       }
        
// OTP()

