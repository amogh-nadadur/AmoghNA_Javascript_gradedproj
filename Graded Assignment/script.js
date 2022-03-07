var editBtn, deleteBtn,counter=1;

function addItem(){

    let inputElement = document.querySelector("#inputDiv");
    let displayElement = document.querySelector("#displayDiv");
    let createDiv = document.createElement("div");
    let task = inputElement.querySelector('input').value;
    
    displayElement.appendChild(createDiv);
    createDiv.id = "unitDiv" + counter;
    taskValue(task,counter);
    counter++;
    inputElement.querySelector('input').value = "";
}

function taskValue(task,counter){
    let displayElement = document.querySelector("#unitDiv"+counter);
    let createInput = document.createElement("p");
    let valueElement = displayElement.appendChild(createInput);
    let createEditBtn = document.createElement("button");
    let createDeleteBtn = document.createElement("button");
    let editButtonElement = document.querySelectorAll(".editBtn");
    if(task===""){
        valueElement.innerHTML = "<br>";
    }
    else{
        valueElement.innerHTML = task;
    }
    displayElement.appendChild(createEditBtn).innerText = "Edit";
    displayElement.appendChild(createEditBtn).className = "editBtn";
    displayElement.appendChild(createEditBtn).setAttribute("onclick", "editBtn(this)");
    displayElement.appendChild(createDeleteBtn).innerText = "Delete";
    displayElement.appendChild(createDeleteBtn).className = "deleteBtn";
    displayElement.appendChild(createDeleteBtn).setAttribute("onclick", "deleteBtn(this)");

}

    

function deleteBtn(className){
    let parentDiv = className.parentElement.id;
    let parentDivElement = document.querySelector("#"+parentDiv);
    parentDivElement.remove();
}

function editBtn(className){
    let parentDiv = className.parentElement.id;
    let parentDivElement = document.querySelector("#"+parentDiv);
    let text = parentDivElement.querySelector("p");
    let promptTask = prompt("Edit the following", text.innerHTML);
    text.innerHTML = promptTask;
}