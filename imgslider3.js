(function e() {
  
    const pictures = [
           
      "1.jpeg",
      "2.jpeg",
      "3.jpeg",
      "4.jpeg",
      "5.jpeg",
      "6.jpeg",
      "7.jpeg"
        
        ];

    

    const buttons = document.querySelectorAll(".btn")
    const imgDiv = document.querySelector(".imgcontainer")

    let counter = 0

    buttons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            if(button.classList.contains('btn-left'))
         {
            counter--
            if(counter<0){
                counter=pictures.length - 1
            }
            imgDiv.style.background = `url('photos/${pictures[counter]}.jpg')`
         }

         if(button.classList.contains('btn-right'))
         {
            counter++
            if(counter> pictures.length-1){
                counter=0
            }
            imgDiv.style.background = `url('photos/${pictures[counter]}.jpg')`

         }
        

        }
        )
    }
    )

    
})();
//'url('sliding image/${pictures[counter]}.jpeg')'