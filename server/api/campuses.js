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
    const campus = await Campus.findOne({
      where: {
        id: req.params.campusId,
      },
      include: Student,
    });
    res.send(campus);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const campus = await Campus.create(req.body);
    res.send(campus);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    await campus.destroy();
    res.send(campus);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
