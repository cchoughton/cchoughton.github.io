document.getElementById("add_sem").onclick = function () {
    var div = document.createElement('div');
    div.className = 'semester';       
    document.getElementsById("semesters")[0].appendChild(div);
};

document.getElementById("rm_sem").onclick = function () {
    document.getElementsById("semesters")[0].appendChild(div);
};
