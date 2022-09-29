
var AdvSearchData = JSON.parse(localStorage.getItem("searchData"))||[];

document.querySelector("#form").addEventListener("submit",SearchFunction);

function SearchFunction(){

    event.preventDefault();

    var obj = {

        Keyword : document.querySelector("#keyword").value,
        Experience :  document.querySelector("#keyword").value,
        Location : document.querySelector("#location").value,
        Industry : document.querySelector("#industry").value,
        Function : document.querySelector("#function").value,
        Role : document.querySelector("#role").value,
        MinSalary : document.querySelector("#min-salary").value,
        MaxSalary : document.querySelector("#max-salary").value,
        Checkbox : document.querySelector("#checkbox").value        
    }

    AdvSearchData.push(obj)    
    localStorage.setItem("searchData",JSON.stringify(AdvSearchData));
    
}
