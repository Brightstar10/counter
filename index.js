//document.getElementById("count-el").innerText= 5;


// change the count-el in the HTML to reflect the new count

//grab the count-el element, store it in a countEl variable 

//set countEl's innertText to count




let countEl = document.getElementById("count-el")
console.log(countEl);

let count = 0

function increment () {
  count += 1
  countEl.textContent = count
  console.log("count")
  
}


// create a function save(), which logs out the count when it's called





let notifications = "you have three new notifications"

console.log(notifications)


let messageToUser = "You have a test next week "
let username = "John"

console.log(messageToUser  + username + "!")



let name = "Brightstar"
let greeting = "Hi, my name is "

let mygreeting =  greeting + name
 console.log(mygreeting)
 





 let saveEl = document.getElementById("save-el");
 
 

 
 function save() {
    let countstr = count + " - "
   saveEl.textContent += countstr
  countEl.textContent = 0
  count = 0
   
 }
 