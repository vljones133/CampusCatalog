'use strict';

const router = require('express').Router();
const { Campus, Student } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.send(campuses);
  } catch (err) {
    next(err);
  }
});

router.get('/:campusId', async (req, res, next) => {
  try {
    const campus = await Campus.findAll({
      where: {
        id: req.params.campusId,
      },
      include: Student,
    });
    console.log(`*******EXPRESS ROUTER CAMPUSID+STUDENTS${campus}*****`);
    console.dir(campus);
    res.send(campus);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
