
window.onload = function () {
    let json = sessionStorage.getItem("item");
    let item = JSON.parse(json);

    document.getElementById("studentName").innerHTML = item.studentName;
    document.getElementById("unit").innerHTML = item.unitName;
    document.getElementById("gradeProject").innerHTML = item.gradep;
    document.getElementById("gradeTest").innerHTML = item.gradet;
    document.getElementById("finalGrade").innerHTML = item.finalGrade;
    document.getElementById("percentageProject").innerHTML = item.percentagep;
    document.getElementById("percentageTest").innerHTML = item.percentaget;
}