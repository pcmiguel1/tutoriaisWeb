var express = require('express');
var router = express.Router();
var studentsModel = require('../models/studentsModel');

router.get('/', async function(req, res, next) {
    let students = await studentsModel.getAllStudents();
    res.send(students);
});

router.get('/:pos', async function(req, res, next) {
    let pos = req.params.pos;
    let student = await studentsModel.getStudent(pos);
    if (student) res.send(student);
    else res.status(404).send({error:"Student Not Found"});
});

router.post('/', async function(req, res, next) {
    let data = req.body;
    let result = await studentsModel.saveGrade(data.pos, data.unit);
    res.send(result);
});

router.post('/:pos', async function(req, res, next) {
    let pos = req.params.pos;
    let data = req.body;
    let result = await studentsModel.saveGrade(pos, data.unit);
    res.send(result);
});

module.exports = router;
