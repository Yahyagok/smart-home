
// first make a nice background and when user clicks on a button it says turn on and off , picture will come out 
// then the other things for light and washing machine. 
//it will be a lot of  buttons and listeners to those buttons
// when user click on tv button . it will have two options, turn off and turn on 
// when it says turn off, it will hiiden the buttons and could go back to main menu
// 

document.addEventListener('DOMContentLoaded', (event) => {
const content = document.getElementsByClassName('content')[0]
const innerDoor = document.getElementsByClassName('inner-door')[0]
content.addEventListener('click', function(event){
    innerDoor.src= "photo/newdoor.jpg"
})






    
});


