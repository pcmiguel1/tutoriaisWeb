
var student_name = "John Smith";
student_name += " grades";

var name_first_unit = "Mathematics";
var grade_first_unit = 7.5;

var name_second_unit = "Literature";
var grade_second_unit = 11.2;

window.onload = function () {
    document.getElementById("student").innerHTML = student_name;

    let aux = "";
    if (grade_first_unit < 9.5) {
        aux += "<section class='box box-failed'>";
    }
    else {
        aux += "<section class='box'>";
    }
    aux += "<div class='square'>" + name_first_unit.substring(0,2) + "</div>"; 
    aux += "<section>" + "<h1>" + name_first_unit + "</h1>" + "<p>" + "Grade: " + grade_first_unit + "</p>" + "</section>";
    aux += "</section>";

    if (grade_second_unit < 9.5) {
        aux += "<section class='box box-failed'>";
    }
    else {
        aux += "<section class='box'>";
    }
    aux += "<div class='square'>" + name_second_unit.substring(0,2) + "</div>"; 
    aux += "<section>" + "<h1>" + name_second_unit + "</h1>" + "<p>" + "Grade: " + grade_second_unit + "</p>" + "</section>";
    aux += "</section>";
    document.getElementById("grades").innerHTML = aux;

}
