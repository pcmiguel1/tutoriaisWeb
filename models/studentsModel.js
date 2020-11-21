
var students = [
    { name: "John Smith", number: 201, id: 12, units:[
        { unit: "Mathematics", grade: 8.3 },
        { unit: "Literature", grade: 11.2 },
        { unit: "Laws", grade: 18.5 },
        { unit: "Informatics", grade: 14.3 },
        { unit: "Cooking", grade: 7.4 }
    ] },

    { name: "Mary Jane", number: 512, id: 31, units:[
        { unit: "Mathematics", grade: 8.3 },
        { unit: "Literature", grade: 11.2 },
        { unit: "Laws", grade: 18.5 }
    ] },

    { name: "Jane Dow", number: 45, id: 3, units:[
        { unit: "Mathematics", grade: 8.3 },
        { unit: "Literature", grade: 11.2 }
    ] }
];

module.exports.getAllStudents =
    function() { return students; }

module.exports.getStudent =
    function(pos) { return students[pos]; };

module.exports.saveGrade = function(pos, unit) {
    let student = students[pos];
    let units = student.units;
    
    if (containsUnit(unit, units, student)) {
        //Se existir
        return {msg:"Changed grade of unit " + unit.unit};
    } else {
        units.push({ unit: unit.unit, grade: unit.grade });
        return {msg:"Added grade for unit " + unit.unit};
    }

}

function containsUnit(unit, units, student) {
    for (let i = 0; i < units.length; i++) {
        if (unit.unit === units[i].unit) {
            student.units[i].grade = unit.grade;
            return  true;
        }
    }
    return false;
}

