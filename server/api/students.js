'use strict';

const router = require('express').Router();
const Student = require('../db/Student');

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.send(students);
  } catch (e) {
    next(e);
  }
});
