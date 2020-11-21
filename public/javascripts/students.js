
//Student information
var students = [
    { name: "John Smith", number: 201, id: 12 },
    { name: "Mary Jane", number: 512, id: 31 },
    { name: "Jane Dow", number: 45, id: 3 }
];


window.onload = function () {

    //Colocar estudantes
    createStudents();


}

function showStudent( pos ) {
    sessionStorage.setItem("studentId", pos);
    sessionStorage.setItem("studentName",students[pos].name);
    window.location = "studentGrades.html";
}

function createStudents() {
    let aux = "";
    for (let i in students) {
        aux += "<section class='student_box' onclick='showStudent("+ i +");'>";
        aux += "<section>" + "<h2>" + students[i].name + "</h2>" + "<p> Number: " + students[i].number + "</p>" + "</section>";
        aux += "</section>";
    }
    document.getElementById("students").innerHTML = aux;
}