var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', f1, f2);

function f1(req, res, next) {
  res.send({x: 2});
}

function f2(req, res, next) {
  res.send({y: 2});
}

module.exports = router;
