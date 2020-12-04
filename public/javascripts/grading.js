
window.onload = function () {

    //Colocar as options no select student_name
    selectStudents();


    //Colocar as options no select unit_name
    selectUnits();

}

async function selectStudents() {

    try {

        let students = await $.ajax({
            url: "/api/students",
            method: "get",
            dataType: "json"
        });

        let aux = "";
        for (let student of students) {
            aux += "<option value='"+ student.id +"'>" + student.name + "</option>";
        }
        document.getElementById("student_name").innerHTML = aux;


    } catch(err) {
        console.log(err);
    }

}

async function selectUnits() {

    try {

        let units = await $.ajax({
            url: "/api/units",
            method: "get",
            dataType: "json"
        });

        let aux = "";

        for (let unit of units) {
            aux += "<option value='"+ unit.id +"'>" + unit.name + "</option>";
        }
        document.getElementById("unit_name").innerHTML = aux;


    } catch(err) {
        console.log(err);
    }

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


function verifyAndCalculate() {

    let obj = {};
    let correct = true;

    if (!verifyEmptyInputs()) correct = false;
    if (!verifyAndSaveGradeProject(obj)) correct = false;
    if (!verifyAndSaveGradeTest(obj)) correct = false;
    if (!verifyAndSavePercentageProject(obj)) correct = false;
    if (!verifyAndSavePercentageTest(obj)) correct = false;
    if (!verifySumPercentages()) correct = false;
    if (!correct) return;

    let project_grade = document.getElementById("project_grade").value;
    let percentage_project = document.getElementById("percentage_project").value;
    let test_grade = document.getElementById("test_grade").value;
    let percentage_test = document.getElementById("percentage_test").value;

    let final_grade = (project_grade * percentage_project) + (test_grade * percentage_test);
    let index_student = document.getElementById("student_name").value;
    let index_unit = document.getElementById("unit_name").value;

    let aux = "";
    aux += "Student " + students[index_student].name + " with number " + students[index_student].number + " obtained " + final_grade.toFixed(1) + " on the " + units[index_unit].unit + " unit (" + units[index_unit].etcs + " ETCS) of the " + units[index_unit].semester  + "º Semester";
    document.getElementById("result").innerHTML = aux;

    obj.studentName = students[index_student].name;
    obj.studentNumber = students[index_student].number;
    obj.unitName = units[index_unit].unit;
    obj.unitSemester = units[index_unit].semester;
    obj.unitEtcs = units[index_unit].etcs;
    obj.finalGrade = final_grade.toFixed(1);

    let json = JSON.stringify(obj); //converting object to json
    sessionStorage.setItem("item", json); //saving json on Web Storage
    window.location = "item.html"; //changing to the item page

}

function verifyEmptyInputs() {
    let project_grade = document.getElementById("project_grade").value;
    let percentage_project = document.getElementById("percentage_project").value;
    let test_grade = document.getElementById("test_grade").value;
    let percentage_test = document.getElementById("percentage_test").value;
    let error3 = document.getElementById("error3");
    if (project_grade == "" || percentage_project == "" || test_grade == "" || percentage_test == "") {
        error3.innerHTML = "Fill in the spaces above!";
        error3.style.display = "block";
        return false;
    }
    error3.style.display = "none";
    return true;

}

function verifySumPercentages() {
    let percentage_project = document.getElementById("percentage_project").value;
    let percentage_test = document.getElementById("percentage_test").value;
    let error3 = document.getElementById("error3");
    let soma = parseFloat(percentage_test) + parseFloat(percentage_project);

    if (soma != 1) {
        error3.innerHTML = "The sum of the percetages have to give 1!";
        error3.style.display = "block";
        return false;
    }
    error3.style.display = "none";
    return true;

}

function verifyAndSaveGradeProject(obj) {
    let project_grade = document.getElementById("project_grade");
    if (!project_grade.checkValidity()) {
        error1.innerHTML = "Grades are between 0 and 20!";
        error1.style.display = "block";
        return false;
    }
    obj.gradep = project_grade.value;
    error1.style.display = "none";
    return true;
}

function verifyAndSaveGradeTest(obj) {
    let test_grade = document.getElementById("test_grade");
    let error2 = document.getElementById("error2");
    if (!test_grade.checkValidity()) {
        error2.innerHTML = "Grades are between 0 and 20!";
        error2.style.display = "block";
        return false;
    }
    obj.gradet = test_grade.value;
    error2.style.display = "none";
    return true;
}

function verifyAndSavePercentageProject(obj) {
    let percentage_project = document.getElementById("percentage_project");
    let error1 = document.getElementById("error1");
    if (!percentage_project.checkValidity()) {
        error1.innerHTML = "Percentages are between 0 and 1!";
        error1.style.display = "block";
        return false;
    }
    obj.percentagep = percentage_project.value;
    error1.style.display = "none";
    return true;
}

function verifyAndSavePercentageTest(obj) {
    let percentage_test = document.getElementById("percentage_test");
    let error3 = document.getElementById("error3");
    if (!percentage_test.checkValidity()) {
        error3.innerHTML = "Percentages are between 0 and 1!";
        error3.style.display = "block";
        return false;
    }
    obj.percentaget = percentage_test.value;
    error3.style.display = "none";
    return true;
}
