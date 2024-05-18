let name1 = document.getElementsByClassName("line4").value;
let email = document.getElementsByClassName("line6").value;
let submit = document.getElementsByClassName("line7");
let box = document.getElementsByClassName("box");
let delect = document.getElementsByClassName("button");


let newTask = {
    name: name1,
    email1: email,
    done: false
};

localStorage = setItem("name1" ,newtask)
