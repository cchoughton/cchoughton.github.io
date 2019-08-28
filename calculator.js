document.getElementById("add").onclick = function () {
    var div = document.createElement('div');
    div.className = 'semester';
    div.innerHTML='<form><label for="grade">Grade</label><input class="grade" type="text"><label for="credit_hours">Credit Hours</label><input class="credit_hours" type="number"></form>'
    document.getElementById("courses").appendChild(div);
};

document.getElementById("rm").onclick = function () {
    var courses = document.getElementById("courses");
    courses.removeChild(courses.lastChild);
};

document.getElementById("calculate").onclick = function () {
    var grades = document.getElementsByClassName("grade");
    var credit_hours = document.getElementsByClassName("credit_hours");
};
