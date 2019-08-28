document.getElementById("add_sem").onclick = function () {
    var div = document.createElement('div');
    div.className = 'semester';
    div.innerHTML='<form><label for="grade">Grade</label><input class="grade" type="text"><label for="credit_hours">Credit Hours</label><input class="credit_hours" type="number"></form>'
    document.getElementById("semesters").appendChild(div);
};

document.getElementById("rm_sem").onclick = function () {
    var sems = document.getElementById("semesters");
    sems.removeChild(sems.lastChild);
};

document.getElementById("calculate").onclick = function () {
    var grades = document.getElementsByClass("grade");
    var credit_hours = document.getElementsByClass("credit_hours");
};
