
// first make a nice background and when user clicks on a button it says turn on and off , picture will come out 
// then the other things for light and washing machine. 
//it will be a lot of  buttons and listeners to those buttons
// when user click on tv button . it will have two options, turn off and turn on 
// when it says turn off, it will hiiden the buttons and could go back to main menu
// 

document.addEventListener('DOMContentLoaded', (event) => {
const content = document.getElementsByClassName('content')[0]
const innerDoor = document.getElementsByClassName('inner-door')[0]
// const doorBtn = document.getElementsByClassName('container')[3]
content.addEventListener('click', function(event){

openDoor()
    function openDoor(){
          if (event.target.className == 'doorBtn' &&  event.target.innerHTML === 'Door' ){
                innerDoor.src= "photo/newdoor.jpg"
                event.target.innerHTML = "door open"
          }else if ( event.target.className == 'doorBtn' && event.target.innerHTML === 'door open') { 
                  innerDoor.src = "photo/bluedoor1.jpg"
                  event.target.innerHTML = "Door"
          }
          
          
      


            
    
   }
})






    
});



// if (event.target.innerHTML === 'open door') {
           
//     innerDoor.src = "photo/bluedoor1.jpg"
//     event.target.innerHTML = "door close"
//     console.log(event.target.innerHTML)
    
//    }
