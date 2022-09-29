const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

let url = "http://localhost:3000/api/data";
let getData = async () => {
  let res = await fetch(url);
  res = await res.json();
  console.log(res);
  renderDom(res);
};
getData();


let renderDom = (data) => {
  let cont = document.getElementById("h-cont");
  cont.innerHTML = null;
  data.forEach(({profile_name ,company_name, location, experience, salary, job_type, skills }) => {
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
    let h3=document.createElement('h3');
    h3.innerText = profile_name;
    let p1 = document.createElement('p');
    p1.innerText = company_name;
    p1.setAttribute("class", "c_name");
    let p2 = document.createElement('p');
    p2.innerText =`Location:- ${location}`;
    p2.setAttribute("class", "c_loc");
    let p3 = document.createElement('p');
    p3.innerText = "Exp:- "+experience;
    let p4 = document.createElement('p');
    p4.innerText = "CTC:- "+salary;
    let p5 = document.createElement('p');
    p5.innerText = "Job Type:- "+job_type;
    let p6 = document.createElement('p');
    p6.innerText = "Skills:- "+skills;
    let btn = document.createElement('button');
    btn.innerText = "Apply";
    btn.setAttribute("class", "apply");
    btn.onclick = () =>{
      applyjob(id);
    };
    div.append(h3,p1);
    div1.append(p2,p3,p4);
    div2.append(p5,p6);
    div3.append(btn);
    div0.append(div,div1,div2,div3);
    cont.append(div0);
  });
};

// let updateDet = async (id) =>{
// const value = window.prompt("Enter new price");
// let new_price ={price:+value};
// let res = await fetch(`${url}/${id}`, {
//   method: "PATCH",
//   body: JSON.stringify(new_price),
//   headers: {'Content-Type': 'application/json',},
// });
// getData();
// };

// let sorthtl =async()=>{
//   let res = await fetch(`${url}/?_sort=price&_order=desc`);
//   res = await res.json();
//   renderDom(res);
// };
// let sortlth =async()=>{
//   let res = await fetch(`${url}/?_sort=price&_order=asc`);
//   res = await res.json();
//   renderDom(res);
// };
// let filtergrt = async()=>{
// let res = await fetch(`${url}?price_gte=4001`);
//  res = await res.json();
//  renderDom(res);
// };
// let filterless = async()=>{
//   let res = await fetch(`${url}?price_lte=4000`);
//   res = await res.json();
//   renderDom(res);
// };