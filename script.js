const optionMenu = document.querySelector(".landingPage-select-menu"),
       selectBtn = optionMenu.querySelector(".landingPage-select-btn"),
       options = optionMenu.querySelectorAll(".landingPage-option"),
       sBtn_text = optionMenu.querySelector(".landingPage-sBtn-text"),
       loginBtn=document.querySelector(".landingPage-loginButton"),
       dropdownCover=document.querySelector(".landingPage-dropdownCover"),
       dropdownLegend=dropdownCover.querySelector(".landingPage-dropdownLegend"),
       alertMsg=document.querySelector(".landingPage-alertMsg");



selectBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("active");
    if(dropdownCover.classList.contains("active")) dropdownCover.classList.remove("active");
    if(dropdownLegend.classList.contains("active")) dropdownLegend.classList.remove("active");
    if(alertMsg.style.display ==="block") alertMsg.style.display ="none";
});  

let selectedOption;
options.forEach(option =>{
    option.addEventListener("click", ()=>{
        selectedOption = option.querySelector(".landingPage-option-text").innerText;
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