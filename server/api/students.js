'use strict';

const router = require('express').Router();
const { Student, Campus } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.send(students);
  } catch (e) {
    next(e);
  }
});

router.get('/:studentId', async (req, res, next) => {
  try {
    const student = await Student.findAll({
      where: {
        studentId: req.params.studentId,
      },
      include: [Campus],
    });
    console.log(`*******EXPRESS ROUTER STUDENTID+STUDENTS${student}*****`);
    res.send(student);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
