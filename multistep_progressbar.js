//dom elements
const circles= document.querySelectorAll(".circle"),
 progressBar= document.querySelector(".indicator"),
 buttons= document.querySelectorAll("button");

let currentStep=1;

// function that updates  the current step and updates the dom
 const updateSteps = (e) =>{
    //update current step based on button clicked
    currentStep = e.target.id === "next" ?  ++currentStep : --currentStep;
    
    //loop through all circles and add/remove "active" based on their index and current step
    circles.forEach((circle, index) =>{
        circle.classList[`${index < currentStep ? "add" : "remove"}`]("active")
    });
    //update progressbar width based on current step
    progressBar.style.width = `${((currentStep - 1) / (circles.length - 1))* 100}%`
    
    //check if current step is first or last and disable corresponding button
    if(currentStep === circles.length){
        buttons[1].disabled = true;
     }
     else if(currentStep === 1){
        buttons[0].disabled = true;
     }
     else{
        buttons.forEach((button) => (button.disabled = false))
     }
};

 //add click event listenners to all buttons
 buttons.forEach((button) => {
    button.addEventListener("click" , updateSteps);
 });