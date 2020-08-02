const express = require('express');
const router = express.Router();
const phones = require('../data/phones.json')


router.get('/', function(req, res, next) {
    res.json({
        ok: true,
        phones: phones
    });
});

module.exports = router;