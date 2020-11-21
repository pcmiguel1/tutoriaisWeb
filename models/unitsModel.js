
var units = [
    { unit: "Mathematics", semester: 3, ects: 6 },
    { unit: "Literature", semester: 2, ects: 6 },
    { unit: "Laws", semester: 1, ects: 3 },
    { unit: "Informatics", semester: 1, ects: 6 },
    { unit: "Cooking", semester: 2, ects: 3 }
];

module.exports.getAllUnits =
    function() { return units; }


