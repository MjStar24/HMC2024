const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text"),
       loginBtn=document.querySelector(".loginButton"),
       dropdownCover=document.querySelector(".dropdownCover"),
       dropdownLegend=dropdownCover.querySelector(".dropdownLegend"),
       alertMsg=document.querySelector(".alertMsg");



selectBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("active");
    if(dropdownCover.classList.contains("active")) dropdownCover.classList.remove("active");
    if(dropdownLegend.classList.contains("active")) dropdownLegend.classList.remove("active");
    if(alertMsg.style.display ==="block") alertMsg.style.display ="none";
});  

let selectedOption;
options.forEach(option =>{
    option.addEventListener("click", ()=>{
        selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
    });
});

loginBtn.addEventListener('click',()=>{
    if(!selectedOption){
        alertMsg.style.display ="block";
        dropdownCover.classList.toggle("active");
        dropdownLegend.classList.toggle("active");
    }
    else alert(selectedOption);

})