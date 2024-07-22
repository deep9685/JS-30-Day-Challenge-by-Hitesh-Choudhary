// Activity 1: Basic Event Handling
// Task 1: Add a click event listner to a button that changes the text conent of a paragraph
const paragraph = document.getElementById('para');
const button = document.getElementById('btn');

button.addEventListener('click', ()=>{
    paragraph.innerText = "Event Handling By Deepak";
});


// Difference btw innerHTML and innerText
const container = document.getElementsByClassName('container');

console.log(container[0].innerHTML);
console.log(container[0].innerText);

// Task 2: Add a double click event listener to an image that toggles its visibility
const image = document.getElementById('image');
image.addEventListener('dblclick', ()=>{
    if(image.style.display === 'none'){
        image.style.display = 'block';
    }else{
        image.style.display = 'none';
    }
});

// Activity 2: Mouseover Event 
// Task 3: Add a mouseover event to an element that changes its bgc
const heading = document.getElementById('heading');
heading.addEventListener('mouseover', ()=>{
    heading.style.backgroundColor = "aqua";
});

// Task 4: Add a mouseout event listener  that resets its bgc
heading.addEventListener('mouseout', ()=>{
    heading.style.backgroundColor = 'lightgray';
});

// Activity 3: Keyboard event
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console
const inputField = document.getElementById('inputField');
inputField.addEventListener('keydown', (event)=>{
    console.log("Key Pressed : ", event.key);
})

// Task 6: Add a key up event listner to an input field that display the current value in a paragraph
const displayPara = document.getElementById('display');
inputField.addEventListener('keyup', ()=>{
    displayPara.innerText = inputField.value;
})

// Activity 4: form Event
// Task 7: Add a submit event listener to  form that prevents the defualt submission and logs the fromdata to console
const form = document.getElementById('my-form');
form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const formdata = new FormData(form);

    for(let [name, value] of formdata){
        console.log(`${name} : ${value}`);
    }
})

// Task 8: Add a change event listener to a select dropdown that display the selected value in a paragraph
const selectElement = document.getElementById('my-select');
selectElement.addEventListener('change', ()=>{
    displayPara.textContent = `Selected Value : ${selectElement.value}`;
})

// Activity Delegation
// Task 9: Add a click event listener to a list that logs the tesxt content of the clicked list item using event delegation
const list = document.getElementById('my-list');
list.addEventListener('click', (event)=>{
    if(event.target.tagName === 'LI'){
        console.log("Clicked content : ", event.target.textContent);
    }
})

// Task 10: Add a event listener to a parent element that listen for events from dynamically added child elements.
const parentElement = document.getElementById('parent');
const addChildBtn = document.getElementById('add-child');

addChildBtn.addEventListener('click', ()=>{
    const newChild = document.createElement('div');
    newChild.innerText = "I am a new child";
    newChild.classList.add('child');

    parentElement.appendChild(newChild);
})

parentElement.addEventListener('click', (event)=>{
    if(event.target && event.target.classList.contains('child')){
        console.log(`Child element clicked : ${event.target.textContent}`);
    }
});