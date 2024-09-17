let inputbox = document.getElementById('input-box');
let listcontainer = document.getElementById('list_container');
function addTask(){
    if (inputbox.value === '') {
        alert("you must write a task")
    } else {
        let li= document.createElement('li');
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "x";
        li.appendChild(span);
    }
    inputbox.value = '';
    saveData()
}

listcontainer.addEventListener('click', function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTasks(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTasks();