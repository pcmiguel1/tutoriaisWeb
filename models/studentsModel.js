

const courseId = 2;


var pool = require("./connection");

module.exports.getAllStudents = async function() { 
    try {
        const sql = "SELECT alu_id AS id, alu_nome AS name, 0 AS number FROM alunos WHERE alu_cur_id = "+courseId;
        const students = await pool.query(sql);
        return students;
    } catch (err) {
        return err;
    } 
}

module.exports.getStudent = async function(stud_id) {
    try {
        let sql = "SELECT alu_id AS id, alu_nome AS name, 0 AS number FROM alunos WHERE alu_id = ?";
        let student = await pool.query(sql, [ stud_id ]);
        
        let infoStudent = student[0];

        sql = "SELECT dis_id AS id, dis_nome AS name, dis_creditos AS ects, pla_semestre AS semester, ins_nota AS grade, ins_id FROM disciplinas, planoestudos, inscricoes WHERE dis_id = pla_dis_id AND ins_pla_dis_id = pla_dis_id AND ins_alu_id = ? AND pla_cur_id = ?";
        infoStudent.grades = await pool.query(sql, [ stud_id, courseId ]);

        return infoStudent;
    } catch (err) {
        console.log(err);
        return err;
    } 
};

module.exports.saveGrade = async function(stud_id, unit) {

    try {

        const sql = "SELECT ins_id FROM inscricoes WHERE ins_alu_id = ? AND ins_pla_dis_id = ? AND ins_id = ?";
        let result = await pool.query(sql, [ stud_id, unit.id, unit.ins_id ]);
        if (result > 0) { // se existir
            sql = "UPDATE inscricoes SET ins_dt_avaliacao = ? , ins_nota = ? WHERE ins_id = ?";
            let result = await pool.query(sql, [ new Date(), unit.grade, unit.ins_id ]);
            if (result.changedRows > 0) {
                return {msg:"Changed grade of unit " + unit.unit};
            }
            return result;
        } 
        else {
            return {error:"Iscription does not correspond to the student and/or unit!"}
        }       

    } catch (err) {
        return err;
    } 

}

