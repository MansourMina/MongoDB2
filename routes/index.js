const express = require('express');
const asyncHandler = require('express-async-handler');
const { getDogs } = require('../model/dogs');

const router = express.Router();

router.get(
  '/welcome',
  asyncHandler((req, res) => res.send('Willkommen beim Basis Server Pimped!')),
);

router.get(
  '/dogs',
  asyncHandler(async (req, res) => {
    const result = await getDogs();
    res.status(200).send(result);
  }),
);

module.exports = router;
