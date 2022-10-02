import {navbar,footer,jobs,home1,crauser,home2,home3} from "./comp.js"
document.getElementById("nav").innerHTML=navbar()
document.getElementById("foot").innerHTML=footer()
document.getElementById("jobs").innerHTML=jobs()

let container = document.getElementById('job-det');
let job= JSON.parse(localStorage.getItem('job_Details')) || [];
console.log(job);
function Display(job) {
  container.innerHTML =null;
  job.forEach(function(ele) {
    let div0 = document.createElement('div');
    div0.setAttribute("class", "mini");
    let div = document.createElement('div');
    div.setAttribute("class", "item");
    let div1 = document.createElement('div');
    div1.setAttribute("class", "item1");
    let div2 = document.createElement('div');
    div2.setAttribute("class", "item2");
    let div3 = document.createElement('div');
    div3.setAttribute("class", "item3");
    let div4= document.createElement('div');
    div4.setAttribute("class", "item4");
    // let div5 = document.createElement('div');
    // div5.setAttribute("class", "item5");

    let h3=document.createElement('h3');
    h3.innerText = ele.profile_name;
    let p1 = document.createElement('p');
    p1.innerText = ele.company_name;
    p1.setAttribute("class", "c_name");
    let p2 = document.createElement('p');
    p2.innerText =`Location:- ${ele.location}`;
    p2.setAttribute("class", "c_loc");
    let p3 = document.createElement('p');
    p3.innerText = "Exp:- "+ele.experience;
    let p4 = document.createElement('p');
    p4.innerText = "CTC:- "+ele.salary;
    let p5 = document.createElement('p');
    p5.innerText = "Job Type:- "+ele.job_type;
    let p6 = document.createElement('p');
    p6.innerText = "Skills:- "+ele.skills;
    let p7 = document.createElement('p');
    p7.innerText = "Total Views: "+ele.total_views;
    let p8 = document.createElement('p');
    p8.innerText ="Total Applications: "+ele.total_applicants;
    let p9 = document.createElement('p');
    p9.innerText = "Job ID: "+ele.id;


    let p10 = document.createElement('p');
    p10.textContent = `Interview Process: 1st & 2nd - Technical Round| 3rd Managerial Round| HR - Discussion.
    (Virtual interview only mandatory to connect interview by LAPTOP as part of interview process)`;
    div.append(h3,p1);
    div1.append(p2,p3,p4);
    div2.append(p5,p6);
    div3.append(p7,p8,p9);
    div4.append(p10)
    div0.append(div,div1,div2,div3,div4);
    container.append(div0);
  });

}
Display(job)
// function submitjb(){
document.getElementById("newapply").addEventListener("click", ()=>{  
setTimeout(()=>{
    alert("You have Successfully applied for this job. Further details will be notified through E-mail");
  },1500);
});