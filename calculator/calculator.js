document.getElementById("add").onclick = function () {
    var div = document.createElement('div');
    div.className = 'semester';
    div.innerHTML='<form><label for="grade">Grade</label><input class="grade" type="text"><label for="credit_hours">Credit Hours</label><input class="credit_hours" type="text"></form>'
    document.getElementById("courses").appendChild(div);
};
document.getElementById("add-sem").onclick = function () {
    for (var i = 0; i < 5; i++) {
        var div = document.createElement('div');
        div.className = 'semester';
        div.innerHTML='<form><label for="grade">Grade</label><input class="grade" type="text"><label for="credit_hours">Credit Hours</label><input class="credit_hours" type="text"></form>'
        document.getElementById("courses").appendChild(div);
    }
};

document.getElementById("rm").onclick = function () {
    var courses = document.getElementById("courses");
    courses.removeChild(courses.lastChild);
};

document.getElementById("rm-all").onclick = function () {
    var courses = document.getElementById("courses");
    while (courses.lastChild) {
        courses.removeChild(courses.lastChild);
    }
};

document.getElementById("calculate").onclick = function () {
    var grades = document.getElementsByClassName("grade");
    var credit_hours = document.getElementsByClassName("credit_hours");
    var gpa=0;
    var total_credit_hours=0;
    var final_gpa=0.0;
    var anyNegativeGPAs = false;
    var anyNegativeHours = false;
    for (var i = 0; i < grades.length; i++) {
        var currentgpa = Number(convert(grades[i].value));
        var currenthours = Number(convert(credit_hours[i].value));
        if (currentgpa < 0) anyNegativeGPAs = true;
        if (currenthours < 0) anyNegativeHours = true;
        gpa+=currentgpa*currenthours;
        total_credit_hours+=currenthours;
    }
    var final_gpa=(gpa/total_credit_hours).toFixed(2);
    var final_hours=total_credit_hours;
    if (isNaN(final_gpa)) final_gpa = 0.0;
    if (anyNegativeGPAs)
        final_gpa="Error: negative grade entered";
    if (anyNegativeHours) {
        final_gpa="Error: negative credit hours entered";
        final_hours="Error: negative credit hours entered";
    }
    if (isNaN(gpa))
        final_gpa="Error: invalid GPA"
    if (isNaN(total_credit_hours))
        final_hours="Error: invalid credit hours input"
    document.getElementsByClassName("calculated-gpa")[0].children[0].innerText=(final_gpa);
    document.getElementsByClassName("calculated-credits")[0].children[0].innerText=(final_hours);
};

function initialCourses() {
    var div = document.createElement('div');
    div.className = 'semester';
    div.innerHTML='<form><label for="grade">Grade</label><input class="grade" type="text"><label for="credit_hours">Credit Hours</label><input class="credit_hours" type="text"></form>'
    document.getElementById("courses").appendChild(div);
};

function convert (grade) {
    if (grade=="A+") return 4.0;
    else if (grade=="A") return 4.0;
    else if (grade=="A-") return 3.7;
    else if (grade=="B+") return 3.3;
    else if (grade=="B") return 3.0;
    else if (grade=="B-") return 2.7;
    else if (grade=="C+") return 2.3;
    else if (grade=="C") return 2.0;
    else if (grade=="C-") return 1.7;
    else if (grade=="D+") return 1.3;
    else if (grade=="D") return 1.0;
    else if (grade=="F") return 0.0;
    else return grade;
}
