const Class = require("../models/Class");

exports.addClass = async (classObj) => {
  const ins = await Class.create(classObj);
  return ins.toJSON();
};

exports.deleteClass = async (classId) => {
  const result = await Class.destroy({
    where: {
      id: classId,
    },
  });
  return result;
};

exports.updateClass = async (classId, classObj) => {
  const result = await Class.update(classObj, {
    where: {
      id: classId,
    },
  });
  return result;
};
