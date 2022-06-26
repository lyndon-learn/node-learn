const Mock = require("mockjs");

const result = Mock.mock({
  "datas|500-700": [
    {
      name: "@cname",
      birthday: "@date",
      "sex|1-2": true,
      mobile: /1[2-9]\d{9}/,
      "ClassId|1-16": 0,
    },
  ],
}).datas;

const Student = require("../models/Student");
Student.bulkCreate(result);
