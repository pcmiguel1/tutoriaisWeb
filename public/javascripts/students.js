
window.onload = function () {

    //Colocar estudantes
    createStudents();


}

function showStudent( stud_id ) {
    sessionStorage.setItem("studentId", stud_id);
    window.location = "studentGrades.html";
}

async function createStudents() {

    try {

        let students = await $.ajax({
            url: "/api/students",
            method: "get",
            dataType: "json"
        });

        let aux = "";
        for (let i in students) {
            aux += "<section class='student_box' onclick='showStudent("+ students[i].id +");'>";
            aux += "<section>" + "<h2>" + students[i].name + "</h2>" + "<p> Number: " + students[i].number + "</p>" + "</section>";
            aux += "</section>";
        }
        document.getElementById("students").innerHTML = aux;

    } catch(err) {
        console.log(err);
    }

}