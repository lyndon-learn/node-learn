const Admin = require("../models/Admin");

exports.addAdmin = async (adminObj) => {
  const ins = await Admin.create(adminObj);
  return ins.toJSON();
};

exports.deleteAdmin = async (adminId) => {
  // 方式1
  //   const ins = await Admin.findByPk(adminId);
  //   if (ins) {
  //     await ins.destroy();
  //   }
  // 方式2
  const result = await Admin.destroy({
    where: {
      id: AdminId,
    },
  });
  return result;
};

exports.updateAdmin = async (adminId, adminObj) => {
  const result = await Admin.update(adminObj, {
    where: {
      id: adminId,
    },
  });
  return result;
};

exports.login = async (loginId, loginPwd) => {
  const result = Admin.findOne({
    where: {
      loginId,
      loginPwd,
    },
  });
  if (result && result.loginId === loginId && result.loginPwd === loginPwd) {
    return result.toJSON();
  }
  return null;
};

exports.getAdminById = async (adminId) => {
  const ins = await Admin.findByPk(adminId);
  if (ins) {
    return ins.toJSON();
  }
  return null;
};
