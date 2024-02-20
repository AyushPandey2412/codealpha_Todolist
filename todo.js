let btn = document.getElementById("newbtn");
let search = document.getElementById("new");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let che = document.querySelector(".hello");
let che1 = document.querySelector(".check");
let listdata = document.querySelector(".list-group-item");

btn.addEventListener('click', func1);

function func1() {
    // Check if the input field is empty
    if (inp.value.trim() === "") {
        alert("Please enter a task.");
        return; // Exit the function if the input is empty
    }

    // Create a new list item for the task
    let item = document.createElement("li");
    item.className = "list-group-item d-flex justify-content-between";
    item.innerHTML = `<input type="checkbox" class="hello" onchange="handelll(this)"><h6 class="flex-grow-1 redesign">${inp.value}</h6>
    <button class="btn btn-warning mx-3" onclick="edittodo(this)">Edit</button>
    <button class="btn btn-danger" onclick="removetodo(this)">Remove</button>`;

    // Append the new list item to the unordered list
    ul.appendChild(item);

    // Clear the input field after adding the task
    inp.value = "";

    // Check if the empty message exists and remove it
    if (ul.querySelector('.emptymsg')) {
        ul.querySelector('.emptymsg').remove();
    }
}

function handelll(element) {
    let currr = element.parentElement.children[1];
    if (element.checked) {
        currr.classList.add("check")
    } else {
        currr.classList.remove("check")
    }
}

function removetodo(element) {
    element.parentElement.remove();

    if (ul.children.length <= 0) {
        let newel = document.createElement("h3")
        newel.classList.add("emptymsg")
        newel.textContent = "Todo list is Empty please Enter some task"
        ul.appendChild(newel)
    }
}

function edittodo(element) {
    if (element.textContent == "done") {
        element.textContent = "Edit"
        let currelement = element.previousElementSibling.value
        let currheading = document.createElement("h6")
        currheading.className = "flex-grow-1 redesign"

        currheading.textContent = currelement
        element.parentElement.replaceChild(currheading, element.previousElementSibling)
    } else {
        element.textContent = "done"
        let currelement = element.previousElementSibling.textContent;
        let newInput = document.createElement("input")
        newInput.type = "text";
        newInput.className = "form-control";
        newInput.value = currelement;
        element.parentElement.replaceChild(newInput, element.previousElementSibling)
    }
}
