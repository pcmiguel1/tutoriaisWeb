
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

    let student_name = document.getElementById("student_name").value;
    let unit_name = document.getElementById("unit_name").value;
    let project_grade = document.getElementById("project_grade").value;
    let percentage_project = document.getElementById("percentage_project").value;
    let test_grade = document.getElementById("test_grade").value;
    let percentage_test = document.getElementById("percentage_test").value;

    if (student_name != "" || unit_name != "" || project_grade != "" || percentage_project != "" || test_grade != "" || percentage_test != "") {
        
        let soma = parseFloat(percentage_test) + parseFloat(percentage_project);

        if (soma == 1) {

            let final_grade = (project_grade * percentage_project) + (test_grade * percentage_test);

            let aux = "";
            aux += "Student " + student_name + " obtained " + final_grade.toFixed(1) + " on the " + unit_name + " unit.";
            document.getElementById("result").innerHTML = aux;

        } else {
            window.alert("the sum of the percetages have to give 1!");
        }

    } else {
        window.alert("fill in the spaces above!");
    }

}