const express = require('express');
const asyncHandler = require('express-async-handler');
const { getDogs, deleteDog, updateDog } = require('../model/dogs');

const router = express.Router();

router.get(
  '/welcome',
  asyncHandler((req, res) => res.send('Willkommen beim Basis Server Pimped!')),
);

router.get(
  '/dogs',
  asyncHandler(async (req, res) => {
    const result = await getDogs(req.query);
    res.status(200).send(result);
  }),
);
router.delete(
  '/dogs/:name',
  asyncHandler(async (req, res) => {
    const result = await deleteDog(req.params.name);
    res.status(200).send(result);
  }),
);

router.patch(
  '/dogs/:name',
  asyncHandler(async (req, res) => {
    const result = await updateDog(req.params.name, req.body);
    res.status(200).send(result);
  }),
);

module.exports = router;
