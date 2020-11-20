
//Student information
var students = [
    { name: "Mary", number: 50037237 },
    { name: "John", number: 50037238 },
    { name: "Anthony", number: 50037239 }
];

var units = [
    { unit: "Mathematics", semester: 3, etcs: 6 },
    { unit: "Literature", semester: 2, etcs: 6 },
    { unit: "Laws", semester: 1, etcs: 3 },
    { unit: "Informatics", semester: 1, etcs: 6 },
    { unit: "Cooking", semester: 2, etcs: 3 }
];

window.onload = function () {

    //Colocar as options no select student_name
    selectStudents();


    //Colocar as options no select unit_name
    selectUnits();
    

}

function selectStudents() {
    let aux = "";
    for (let i in students) {
        aux += "<option value='"+ i +"'>" + students[i].name + "</option>";
    }
    document.getElementById("student_name").innerHTML = aux;
}

function selectUnits() {
    let aux = "";
    for (let i in units) {
        aux += "<option value='"+ i +"'>" + units[i].unit + "</option>";
    }
    document.getElementById("unit_name").innerHTML = aux;
}


function resetInputs() {
    document.getElementById("student_name").value = "";
    document.getElementById("unit_name").value = "";
    document.getElementById("project_grade").value = "";
    document.getElementById("percentage_project").value = "";
    document.getElementById("test_grade").value = "";
    document.getElementById("percentage_test").value = "";

    document.getElementById("result").innerHTML = "";

}

function calculate() {

    let index_student = document.getElementById("student_name").value;
    let index_unit = document.getElementById("unit_name").value;
    let project_grade = document.getElementById("project_grade").value;
    let percentage_project = document.getElementById("percentage_project").value;
    let test_grade = document.getElementById("test_grade").value;
    let percentage_test = document.getElementById("percentage_test").value;

    if (student_name != "" || unit_name != "" || project_grade != "" || percentage_project != "" || test_grade != "" || percentage_test != "") {
        
        let soma = parseFloat(percentage_test) + parseFloat(percentage_project);

        if (soma == 1) {

            let final_grade = (project_grade * percentage_project) + (test_grade * percentage_test);

            let aux = "";
            aux += "Student " + students[index_student].name + " with number " + students[index_student].number + " obtained " + final_grade.toFixed(1) + " on the " + units[index_unit].unit + " unit (" + units[index_unit].etcs + " ETCS) of the " + units[index_unit].semester  + "º Semester";
            document.getElementById("result").innerHTML = aux;

        } else {
            window.alert("the sum of the percetages have to give 1!");
        }

    } else {
        window.alert("fill in the spaces above!");
    }

}