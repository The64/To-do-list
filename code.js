let input = document.querySelector(".input");
let submit = document.querySelector(".submit");

let btnDelete = document.querySelector(".delete");

let container = document.querySelector(".container");

let counter = 1;

submit.addEventListener("click", function () {
    
    if (input.value == ""){
        
    }
    else{

        const newToDo = document.createElement("div");
        newToDo.classList.add("to-do");


        const start = document.createElement("div");
        start.classList.add("start");


        const end = document.createElement("div");
        end.classList.add("end");


        const text = document.createElement("p");
        text.classList.add("text");
        const inputValue = input.value;
        text.textContent = inputValue;


        const button = document.createElement("button");
        button.classList.add("delete");
        button.textContent = "Delete";


        container.appendChild(newToDo)
        newToDo.appendChild(start);
        newToDo.appendChild(end);

        start.appendChild(text);
        end.appendChild(button);


        counter++
        button.classList.add(counter)

        

    }



})

const body = document.querySelector(".body")

body.addEventListener("click", deleteCheck);


function deleteCheck(e) {
    
    const item = e.target;

    if (item.classList[0] == "delete") {
        item.parentNode.parentNode.remove();
    }

}