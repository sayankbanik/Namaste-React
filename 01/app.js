const head = document.createElement("h1");
const divElement = document.getElementById("root");
head.textContent = "Hello World from External JavaScript File";
// console.log(divElement);
divElement.appendChild(head);
