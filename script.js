var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");




function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value="";
}



function addToList() {
    if (inputLength() > 0) {
            createListElement();
        }
}

button.addEventListener("click", addToList);


function doneTask(task) {
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}


function itsDone (element) {
	doneTask(element);
}

ul.addEventListener("click", itsDone)

