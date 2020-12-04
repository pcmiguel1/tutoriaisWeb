
var ects = 0;
var ects_grade = 0;
var number_units_failed = 0;
var number_units_finished = 0;


window.onload = async function () {

    let student_id = sessionStorage.getItem("studentId");
    
    try {

        let student = await $.ajax({
            url: "/api/students/"+student_id,
            method: "get",
            dataType: "json"
        });

        document.getElementById("student").innerHTML = student.name + " Grades";

    } catch(err) {
        console.log(err);
    }

    //Colocar as disciplinas
    updateUnit(student_id);
    
}

async function updateUnit( stud_id ) {

    try {

        let student = await $.ajax({
            url: "/api/students/"+stud_id,
            method: "get",
            dataType: "json"
        });

        let aux = "";

        let units =  student.grades;
        
        for (let unit of units) {

            if (unit.grade < 9.5) {
                aux += "<section class='box box-failed'>";
                number_units_failed++;
            }
            else {
                aux += "<section class='box'>";
                number_units_finished++;
                ects += unit.ects;
                ects_grade += (unit.ects * unit.grade);
            }
            aux += "<section class='sec'>";
            aux += "<div class='square'>" + unit.name.substring(0,2) + "</div>"; 
            aux += "<section>" + "<h1 style='margin-top: 0; margin-bottom: 0;' >" + unit.name + "</h1>" + "<p>" + "Grade: " + unit.grade + "</p>" + "</section>";
            aux += "</section>";
            aux += "<section>" + "<p>" + "Semester: " + unit.semester + "º semester" + "</p>";
            aux += "<p>" + "ECTS: " + unit.ects + "</p>" + "</section>"
            aux += "</section>";

        }
        document.getElementById("grades").innerHTML = aux;

        //update details
        var total = parseFloat(ects_grade) / parseFloat(ects);
        
        aux = "";
        aux += "<summary>" + "Average: " + total.toFixed(1) + "</summary>";
        aux += "<p>" + number_units_failed + " failed units" + "</p>";
        aux += "<p>" + number_units_finished + " passed units" + "</p>";

        document.getElementById("summary").innerHTML = aux;

    } catch(err) {
        console.log(err);
    }

}
