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
    var final_calc=0.0;
    for (var i = 0; i < grades.length; i++) {
        gpa+=Number(convert(grades[i].value))*Number(credit_hours[i].value);
        total_credit_hours+=Number(credit_hours[i].value);
        var final_calc=(gpa/total_credit_hours).toFixed(2);
        if (isNaN(gpa) || isNaN(total_credit_hours)) {
            final_calc="Error!"
        }
        if (isNaN(final_calc)) final_calc=0.0;
        if (isNaN(total_credit_hours)) {
            total_credit_hours="Error!"
        }
    }
    document.getElementsByClassName("calculated-gpa")[0].children[0].innerText=(final_calc);
    document.getElementsByClassName("calculated-credits")[0].children[0].innerText=(total_credit_hours);
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
