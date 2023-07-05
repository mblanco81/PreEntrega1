document.addEventListener("DOMContentLoaded",function()
{
    const button =document.getElementById("button");
    const div= document.querySelector("div");
    button.addEventListener("click",function()
    {alert("esto es un componente");
    if(div.style.backgroundcolor==="blue"){
        div.style.backgroundcolor==="red";
    } else{
        div.style.backgroundcolor==="blue";
    }
});
});