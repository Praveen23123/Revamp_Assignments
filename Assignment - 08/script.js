var bulb = document.getElementById("bulb");
var cat = document.getElementById("cat");
var switch_status = document.getElementById("switch-status");
var off_btn = document.getElementById("off-btn");
var on_btn = document.getElementById("on-btn");

off_btn.addEventListener("click" , ()=>{
    bulb.src = "../Assignment 8/assets/bulb-go-off-img.png";
    cat.src = "../Assignment 8/assets/cat-eyes-img.png";
    off_btn.style.backgroundColor = "#CBD2D9";
    on_btn.style.backgroundColor = "#22C55E";
    switch_status.textContent = "Switched OFF";
    
})

on_btn.addEventListener("click" , ()=>{
    bulb.src = "../Assignment 8/assets/bulb-go-on-img.png";
    cat.src = "../Assignment 8/assets/cat-img.png";
    off_btn.style.backgroundColor = "#EF4444";
    on_btn.style.backgroundColor = "#CBD2D9";
    switch_status.textContent = "Switched ON";
})