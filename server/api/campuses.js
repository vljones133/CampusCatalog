'use strict';

const router = require('express').Router();
const Campus = require('../db/Campus');

router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.send(campuses);
  } catch (e) {
    next(e);
  }
});
