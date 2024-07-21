// Activity 1: Selecting and Manipulating Elements
// Task 1: Select an HTML element by it's id and change it's text content
const para = document.getElementById("para");
para.innerHTML = "Hello World";

// Task 2: Select an HTML element by it's class and change its background color
const head = document.getElementsByClassName("heading");
head[0].style.backgroundColor = "orange";

// Activity 2: Creating and Appending Element 
// Task 3: create a new div element with some new text content and append it
const ele = document.createElement("div");
ele.innerHTML = "Hi, it's a sunday";
para.appendChild(ele);

// Task 4: Create a new li element and add it to an existing ul list
const ul = document.getElementById("unlist");
const list = document.createElement("li");
list.innerHTML = "How are you";
ul.appendChild(list);

// Activity 3: Removing element
// Task 5: Select an html element and remove it from dom
// ul.removeChild(list);

// Tasc 6: Remove the last child of specific html element
const parent = document.getElementsByClassName("container");
if(parent[0].hasChildNodes()){
    parent[0].removeChild(parent[0].lastElementChild);
}

// Activity 4: Modifying attributes and classes
// Task 7: select an html elements and change one of it's attributes 
const image = document.getElementById('image');
image.setAttribute('src', '342413.jpg'); 

// Task 8: Add and remove a CSS class from an HTML element
// Select the paragraph element and buttons by their IDs
const paragraph = document.getElementById('my-paragraph');
const addClassButton = document.getElementById('add-class-btn');
const removeClassButton = document.getElementById('remove-class-btn');

function addClass(){
    paragraph.classList.add('highlight');
}
function removeClass(){
    paragraph.classList.remove('highlight');
}

addClassButton.addEventListener('click', addClass);
removeClassButton.addEventListener('click', removeClass);

// Activity 5: Event Listner
// Task 9: Add a click event listner that change the text content of a paragraph
const textChange = document.getElementById('textChange');
textChange.addEventListener('click', ()=>{
    paragraph.innerHTML = "Text change applied";
});

// Task 10: Add a mouseover event listner to an element that changes it's border color
const mouseover = document.getElementById('mouseover');
mouseover.addEventListener('mouseover', ()=>{
    mouseover.style.borderColor = "blue";
});

mouseover.addEventListener('mouseout', ()=>{
    mouseover.style.borderColor = "black";
})