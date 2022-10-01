import {navbar,footer,jobs} from "./scripts/comp.js"
document.getElementById("nav").innerHTML=navbar()
document.getElementById("foot").innerHTML=footer()
document.getElementById("jobs").innerHTML=jobs()

 let btn=document.querySelector(".class");
 btn.onclick=async()=>{
    let name=document.getElementById("nam").value;
    alert(` Hello ${name} Our Executive will get in touch with you soon`)
    console.log("x")
 }
 
 let btn2=document.querySelector("#cal");
 btn2.onclick=async()=>{
    
    setTimeout(() => {
      let name=document.getElementById("nam").value;

        alert(`Hello ${name} Your response has been recorded we will reach you out within 24hrs`) 
    },1000);

   
    
 }
 
 

//     let popup = document.getElementById("popup");
//         function openPopup() {
//             popup.classList.add("open-popup");
// }

// function closePopup() {
//     popup.classList.add("close-popup");

//  }
// function openPopup() {
//   document.getElementById("popup").style.display = "block";
// }

// function closePopup() {
//   document.getElementById("popup").style.display = "none";
// }
