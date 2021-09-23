//document.getElementById("count-el").innerText= 5;


// change the count-el in the HTML to reflect the new count

//grab the count-el element, store it in a countEl variable 

//set countEl's innertText to count




let countEl = document.getElementById("count-el")
console.log(countEl);

let count = 0

function increment () {
  count = count + 1
  countEl.innerText = count
  console.log("count")
  
}


// create a function save(), which logs out the count when it's called

function save() {
console.log("count")
}

save()



let notifications = "you have three new notifications"

console.log(notifications)


let messageToUser = "You have a test next week"
let username = "John"

console.log(messageToUser + ", " + username + "!")



let name = "Brightstar"
let greeting = "Hi, my name is "

let mygreeting =  greeting + name
 console.log(mygreeting)