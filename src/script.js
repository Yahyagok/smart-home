
// first make a nice background and when user clicks on a button it says turn on and off , picture will come out 
// then the other things for light and washing machine. 
//it will be a lot of  buttons and listeners to those buttons
// when user click on tv button . it will have two options, turn off and turn on 
// when it says turn off, it will hiiden the buttons and could go back to main menu
// 

document.addEventListener('DOMContentLoaded', (event) => {
const content = document.getElementsByClassName('content')[0]
const innerDoor = document.getElementsByClassName('inner-door')[0]

const doorPhone = document.getElementsByClassName('container')[2]

const doorBtn = doorPhone.getElementsByTagName('button')[0]

const washing = document.getElementsByClassName('washing')[0]
const body = document.getElementsByTagName('body')[0]

allUtilities()

      function allUtilities(){
            fetch('http://localhost:3000/utilities')
           .then(r => r.json())
           .then(utilities => getUtilities(utilities))
      }
           function getUtilities(utilities){
              utilities.forEach(utility => {
                console.log(utility)  
              const div = document.createElement('div')
              div.className = "each-utility"
              doorBtn.dataset.id = utility.id 
              const li = document.createElement('li')
              if( utility.door === false){
               innerDoor.src = "photo/newdoor.jpg"
              }else{
               innerDoor.src = "photo/bluedoor1.jpg" 
              }
              li.innerHTML = utility.door
              div.append(li)
              body.append(div)
                   })
              }

content.addEventListener('click', function(event){

            const utility = document.getElementsByClassName('each-utility')[0]
        
          
            const id = 3 
          //   const id = doorBtn.dataset.id
            const li = utility.getElementsByTagName('li')[0]
            
            let status = li.innerHTML
            if( doorBtn.textContent === "Close Door"){
                 innerDoor.src = "photo/bluedoor1.jpg" 
                 doorBtn.textContent = "Open Door"
                  status = "true"
           }else if(event.target.className === 'doorBtn' ){
                  innerDoor.src = "photo/newdoor.jpg"
                  doorBtn.textContent = "Close Door"    
                  status = "false"
            }

          
        
              fetch(`http://localhost:3000/utilities/${id}`,{

                   method: "PATCH",
                   headers: {
                              'Content-Type': 'application/json',
                              'Accept': 'application/json'       
                   },
                   body: JSON.stringify({ door: status }) 
             }) 
             .then(r => r.json())
             .then(data => {
                   if (data.door === "true" ){
                        innerDoor.src = "photo/newdoor.jpg"
                        
                      
                   }else if(data.door === "false"){
                        innerDoor.src = "photo/bluedoor1.jpg"  
                   }
             })
             

            //  .then(r => r.json())
            //  .then()

          

           
            //  .then(r => r.json())
            //  .then(utility => changeDoor(utility))

      //     fetch(`http://localhost:3000/utilities/${id}`,{
      //       method: "PATCH", 
      //       body:JSON.stringify({ door:   })
      // })

      

//    }

    washingMachine()

    function washingMachine(){
        if (event.target.className == 'washingBtn' &&  event.target.innerHTML === 'Washing off' ){
              washing.src= "photo/washing machine.gif"
              event.target.innerHTML = "Washing on"
        }else if (event.target.className == 'washingBtn' && event.target.innerHTML === 'Washing on') { 
                washing.src = "photo/new machine1.jpg"
                event.target.innerHTML = "Washing off"
            }
        }

   })

   
  

     

   



//     const utility =
//           {
//          home_id: 7,
//          user_id: 7,
//          door: false,
//          temperature: 52,
//          light: false,
//         alarm_system: true
//         }
//         fetch('http://localhost:3000/utilities',{
//             method: "PATCH", 
//             body:JSON.stringify(utility)
//       })
//       .then(r => r.json())
//       .then(json => console.log(json))




    







    
});



// if (event.target.innerHTML === 'open door') {
           
//     innerDoor.src = "photo/bluedoor1.jpg"
//     event.target.innerHTML = "door close"
//     console.log(event.target.innerHTML)
    
//    }
