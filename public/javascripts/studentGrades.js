

//Units information

var units = [
    [
        { unit: "Mathematics", grade: 8.3, semester: 3, ects: 6 },
        { unit: "Literature", grade: 11.2, semester: 2, ects: 6 },
        { unit: "Laws", grade: 18.5, semester: 1, ects: 3 },
        { unit: "Informatics", grade: 14.3, semester: 1, ects: 6 },
        { unit: "Cooking", grade: 7.4, semester: 2, ects: 3 }
    ],
    [
        { unit: "Mathematics", grade: 8.3, semester: 3, ects: 6 },
        { unit: "Literature", grade: 11.2, semester: 2, ects: 6 },
        { unit: "Laws", grade: 18.5, semester: 1, ects: 3 }
    ],
    [
        { unit: "Mathematics", grade: 8.3, semester: 3, ects: 6 },
        { unit: "Literature", grade: 11.2, semester: 2, ects: 6 }
    ]
];


var ects = 0;
var ects_grade = 0;
var number_units_failed = 0;
var number_units_finished = 0;


window.onload = function () {

    let student_id = sessionStorage.getItem("studentId");
    let student_name = sessionStorage.getItem("studentName");

    document.getElementById("student").innerHTML = student_name + " Grades";

    //Colocar as disciplinas
    updateUnit(units, student_id);
    //update details
    var total = parseFloat(ects_grade) / parseFloat(ects);
    
    let aux = "";
    aux += "<summary>" + "Average: " + total.toFixed(1) + "</summary>";
    aux += "<p>" + number_units_failed + " failed units" + "</p>";
    aux += "<p>" + number_units_finished + " passed units" + "</p>";

    document.getElementById("summary").innerHTML = aux;


}

function updateUnit( units, id ) {

    let aux = "";

    let unit =  units[id];
    for (let i = 0; i < unit.length; i++) {

        if (unit[i].grade < 9.5) {
            aux += "<section class='box box-failed'>";
            number_units_failed++;
        }
        else {
            aux += "<section class='box'>";
            number_units_finished++;
        }
        aux += "<section class='sec'>";
        aux += "<div class='square'>" + unit[i].unit.substring(0,2) + "</div>"; 
        aux += "<section>" + "<h1 style='margin-top: 0; margin-bottom: 0;' >" + unit[i].unit + "</h1>" + "<p>" + "Grade: " + unit[i].grade + "</p>" + "</section>";
        aux += "</section>";
        aux += "<section>" + "<p>" + "Semester: " + unit[i].semester + "º semester" + "</p>";
        aux += "<p>" + "ECTS: " + unit[i].ects + "</p>" + "</section>"
        aux += "</section>";

        ects += unit[i].ects;
        ects_grade += (unit[i].ects * unit[i].grade);

    }
    document.getElementById("grades").innerHTML = aux;

}
