//change text
const changeText = document.querySelector("#paragraph");
const toggleButton = document.querySelector("#text-button");

toggleButton.addEventListener("click", function () {
    if (changeText.textContent === "Click the button to change the text!") {
        changeText.textContent = "Text has been changed!";
    } else {
        changeText.textContent = "Click the button to change the text!";
    }
});
//toggle visibility
function myFunction() {
    var x = document.getElementById("paragraph");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//change color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeTextBackgroundColor() {
    const textElement = document.querySelector("#paragraph");
    textElement.style.backgroundColor = getRandomColor();
}

const button = document.querySelector("#color-button");
button.addEventListener("click", changeTextBackgroundColor);

//calculator

function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
    } else {
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                result = num1 / num2;
                break;
            default:
                result = "Unknown operation.";
        }
    }

    document.getElementById('result').innerText = "Result: " + result;
}

//form
function validateForm() {
    let name = document.forms["form"]["name"].value;
    let email = document.forms["form"]["email"].value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (name.length <= 3) {
        alert("Name must be longer than 3 characters");
        return false;
    }
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    return true;
}

//greeting form
document.querySelector("#greet-button").addEventListener("click", function() {
    const name = document.querySelector("#username").value;
    const greetingParagraph = document.querySelector("#greeting");
    if (name) {
        greetingParagraph.textContent = `Hello, ${name}! Welcome to our site.`;
    } else {
        greetingParagraph.textContent = "Please enter your name.";
    }
});

//Hover image
const hoverImage = document.querySelector("#hover-image");

hoverImage.addEventListener("mouseover", function() {
    hoverImage.src = "images/Carousel_3.jpg";
});

hoverImage.addEventListener("mouseout", function() {
    hoverImage.src = "images/Carousel_2.jpg";
});

//to-do list
document.querySelector("#add-button").addEventListener("click", function() {
    const todoInput = document.querySelector("#todo-input");
    const todoList = document.querySelector("#todo-list");

    if (todoInput.value.trim() !== "") {
        const newTodoItem = document.createElement("li");
        newTodoItem.classList.add("todo-item");
        newTodoItem.textContent = todoInput.value;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");

        deleteButton.addEventListener("click", function() {
            todoList.removeChild(newTodoItem);
        });

        newTodoItem.appendChild(deleteButton);
        todoList.appendChild(newTodoItem);

        todoInput.value = ""; // Clear the input field after adding the item
    }
});