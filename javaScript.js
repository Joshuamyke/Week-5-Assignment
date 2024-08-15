function evenOrOdd(num) {
   if (num % 2 === 0) {
      return "Even";
   } else {
      return "Odd";
   }
}

console.log(evenOrOdd(5)); 
console.log(evenOrOdd(4)); 


const myList = document.getElementById("myList");
const addItemButton = document.getElementById("addItemButton");

addItemButton.addEventListener("click", () => {
   const newItem = document.createElement("li");
   newItem.textContent = "New Item";
   myList.appendChild(newItem);
});


function changeBackgroundColor(resp, elementId) {
   const element = document.getElementById(elementId);
   if (resp === "failed") {
      element.style.backgroundColor = "red";
   } else if (resp === "successful") {
      element.style.backgroundColor = "green";
   }
}


changeBackgroundColor("successful", "myElement");


async function fetchData() {
   const response = await fetch("https://jsonplaceholder.typicode.com/comments");
   const data = await response.json();
   const commentList = document.getElementById("commentList");

   data.forEach((comment) => {
      const commentItem = document.createElement("li");
      commentItem.textContent = `${comment.name}: ${comment.body}`;
      commentList.appendChild(commentItem);
   });
}

fetchData();


function calculateCircleArea(radius) {
   const pi = Math.PI;
   const area = pi * Math.pow(radius, 2);
   return area;
}

console.log(calculateCircleArea(5)); 