var count=document.getElementById("count");
var decrease=document.getElementById("des");
var reset=document.getElementById("reset");
var increase=document.getElementById("ins");

decrease.addEventListener("click",()=>{
    count.textContent=parseInt(count.textContent)-1;
    if(count.textContent < 0){
        count.style.color="red";
    }
    else if(count.textContent>0){
        count.style.color="green"
    }
    else{
        count.style.color="black"
    }
})

reset.addEventListener("click",()=>{
    count.textContent=0;
    if(count.textContent < 0){
        count.style.color="red";
    }
    else if(count.textContent>0){
        count.style.color="green"
    }
    else{
        count.style.color="black"
    }
})

increase.addEventListener("click",()=>{
    count.textContent=parseInt(count.textContent)+1;
    if(count.textContent < 0){
        count.style.color="red";
    }
    else if(count.textContent>0){
        count.style.color="green"
    }
    else{
        count.style.color="black"
    }
})