/*
const personalTitle = document.quarySelector(".personal-title-input");
const personalDescription = document.quarySelector(".personal-description-input");
const personalAdd = document.quarySelector(".personal-button");
const personalList = document.quarySelector(".personal-events");

document.addEventListener("DOMContentLoaded", getPersonals);
document.addEventListener("DOMContentLoaded", personals);
document.removeEventListener("DOMContentLoaded", personals);

personalButton.addEventListener("click", addPersonal);
personalList.addEventListener("click", deletePersonal);
*/

const todoObjectList = [];

class Todo_Class {
    constructor(item){
        this.ulElement =item;
    } 

    add() {
        const todoInput = document.querySelector("#myInput").value;
        if (todoInput == "") {
            alert("You did not enter any item!") 
        } else {
            const todoObject = {
                id : todoObjectList.length,
                todoText : todoInput,
                isDone : false,
            }

        todoObjectList.unshift(todoObject);
        this.display();
        document.querySelector("#myInput").value = '';

        }
    }

    done_undone(x) {
        const selectedTodoIndex = todoObjectList.findIndex((item)=> item.id == x);
        console.log(todoObjectList[selectedTodoIndex].isDone);
        todoObjectList[selectedTodoIndex].isDone == false ? todoObjectList[selectedTodoIndex].isDone = true : todoObjectList[selectedTodoIndex].isDone = false;
        this.display();
    }

    deleteElement(z) {
        const selectedDelIndex = todoObjectList.findIndex((item)=> item.id == z);

        todoObjectList.splice(selectedDelIndex,1);

        this.display();
    }


    display() {
        this.ulElement.innerHTML = "";

        todoObjectList.forEach((object_item) => {

            const liElement = document.createElement("li");
            const delBtn = document.createElement("i");

            liElement.innerText = object_item.todoText;
            liElement.setAttribute("data-id", object_item.id);

            delBtn.setAttribute("data-id", object_item.id);
            delBtn.classList.add("far", "fa-trash-alt");

            liElement.appendChild(delBtn);
            
            delBtn.addEventListener("click", function(e) {
                const deleteId = e.target.getAttribute("data-id");
                myTodoList.deleteElement(deleteId);
            })
            
            liElement.addEventListener("click", function(e) {
                const selectedId = e.target.getAttribute("data-id");
                myTodoList.done_undone(selectedId);
            })

            if (object_item.isDone) {
                liElement.classList.add("checked");
            }

            this.ulElement.appendChild(liElement);
        })
    }
} 

const listSection = document.querySelector("#myUL");

myTodoList = new Todo_Class(listSection);


document.querySelector(".addBtn").addEventListener("click", function() {
    myTodoList.add()
})

document.querySelector("#myInput").addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
        myTodoList.add()
    }
})

/*
function personals (){
    var personals = new Array ("eat nuts");

    for (i = 0; i < personals.length; i++) {
        const personalDiv = document.createElement("div");
        personalDiv.classList.add("personal");

        const newPersonal = document.createElement("li");
        newPersonal.innerText = personals[i];

        saveLocalPersonals(personals[i]);
        newPersonal.classList.add("personal-item");
        personalDiv.appendChild(newPersonal);

        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="far fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="far fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        personalDiv.appendChild(trashButton);

        personalList.appendChild(personalDiv);
    }
}

function addPersonal(event) {
    event.preventDefault();

    if (!(personalTitle.value === "")) {
        const personalDiv = document.createElement("div");
        personalDiv.classList.add("personal");

        const newPersonal = document.createElement("li");
        newPersonal.innerText = personalTitle.value + " - " + personalDescription.value;

        saveLocalPersonal(personalTitle.value + " - " + personalDescription.value);
        newPersonal.classList.add("personal-item");
        personalDiv.appendChild(newPersonal);

        document.getElementsByClassName("personal-label2").textContent="1 Event";
        document.getElementsByClassName("home-label2").textContent=personalTitle.value;
        document.getElementsByClassName("home-label3").textContent=personalDescription.value;

        personalTitle.value = "gay";
        personalDescription = "lord";

        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class = "trash"';
        trashButton.classList.add("trash-btn")
        personalDiv.appendChild(trashButton);

        personalList.appendChild(personalDiv);
    }
}

function deletePersonal(e) {
    const item = e.target;

    if (item.classList[0] === "trash-btn") {
        const personal = item.parentElement;
        personal.classList.add("fall");
        removeLocalPersonals(personal);

        personal.addEventListener("transitioned", e =>{
            personal.remove();
        });
    }
}

function saveLocalPersonal(personal) {
    let personals;
    
    if (localStorage.getItem("personals") === null) {
        personals = [];
    }

    else {
        personals = JSON.parse(localStorage.getItem("personals"));
    }

    personals.push(personal);
    localStorage.setItem("personals", JSON.stringify(personals));
}

function removeLocalPersonals(personal) {
    let personals;
    
    if (localStorage.getItem("personals") === null) {
        personals = [];
    }

    else {
        personals = JSON.parse(localStorage.getItem("personals"));
    }

    const personalText = personal.children[0].innerText;

    personals.splice(personals.indexOf(personalText), 1);
    localStorage.setItem("personals", JSON.stringify(personals));
}

function getPersonals (){
    let personals;

    if (localStorage.getItem("personals") === null) {
        personals = [];
    }

    else {
        personals = JSON.parse(localStorage.getItem("personals"));
    }

    personals.forEach(function(personal) {
        const personalDiv = document.createElement("div");
        personalDiv.classList.add("personal");

        const newPersonal = document.createElement("li");
        newPersonal.innerText = personal;
        newPersonal.classList.add("personal-item");
        personalDiv.appendChild(newPersonal);

        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        personalDiv.appendChild(trashButton);
        personalList.appendChild(personalDiv);
    });
}
*/