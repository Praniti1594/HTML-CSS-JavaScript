const currentDate= document.querySelector(".current-date"),
daysTag= document.querySelector(".days"),
prevNextIcon= document.querySelectorAll(".icons span");
//getting new date month and year
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January" , "February" , "March" , "April" ,
 "May" , "June" , "July", "August","September","November","December"]


const renderCalender = () => {
    let firstDayofMonth = new Date(currYear, currMonth,1).getDay(),
    lastDateofMonth = new Date(currYear, currMonth+1,0).getDate(),
    lastDayofMonth = new Date(currYear, currMonth,lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currYear, currMonth,0).getDate(); //get last date of prev month
    liTag="";

    for (let i =firstDayofMonth ; i > 0; i--) {
        liTag +=` <li class="inactive">${lastDateofLastMonth-i+1}</li>`;
        
    }

    for (let i = 1; i <=lastDateofMonth; i++) { // list of all days of current month
        // adding active class to li if current day, year , month matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                       && currYear === new Date().getFullYear() ? "active" : "";
                             liTag +=` <li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth ; i < 6; i++) {
        liTag +=` <li class="inactive">${i - lastDayofMonth + 1}</li>`;
        
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML=   liTag;
}
 renderCalender();

 prevNextIcon.forEach(icon =>{
  
    icon.addEventListener("click", () =>{
    currMonth=icon.id === "prev" ? currMonth-1 : currMonth+1;

    if(currMonth<0 ||  currMonth>11){ // if current month is less than 0 or greater than 11
        date = new Date(currYear , currMonth);
        currYear= date.getFullYear();
        currMonth = date.getMonth();
       }
       else{ // else pass new date as new date value
        date = new Date();

       }

    renderCalender();
    });
 
});

