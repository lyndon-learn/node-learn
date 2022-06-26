const Student = require("../models/Student");

exports.addStudent = async (studentObj) => {
  const ins = await Student.create(studentObj);
  return ins.toJSON();
};

exports.deleteStudent = async (studentId) => {
  const result = await Student.destroy({
    where: {
      id: studentId,
    },
  });
  return result;
};

exports.updateStudent = async (studentId, studentObj) => {
  const result = await Student.update(studentObj, {
    where: {
      id: studentId,
    },
  });
  return result;
};
