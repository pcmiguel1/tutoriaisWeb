
window.onload = async function () {

    try {

        let units = await $.ajax({
            url: "/api/units",
            method: "get",
            dataType: "json"
        });

        let aux = "";
        aux += "<th>Name</th><th>ECTS</th><th>Year</th><th>Semester</th>";
        for (let unit of units) {
            aux += "<tr><td>"+unit.name+"</td><td>"+unit.ects+"</td><td>"+unit.semester+"</td><td>"+unit.semester+"</td></tr>";
        }
        aux += "<th>Name</th><th>ECTS</th><th>Year</th><th>Semester</th>";
        document.getElementById("units").innerHTML = aux;

    } catch(err) {
        console.log(err);
    }

}