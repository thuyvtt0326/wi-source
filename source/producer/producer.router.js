let express = require('express');
let router = express.Router();
const models = require('../models');
let response = require('../response');
let Producer = models.Producer;
// let ProducerModel = require('./pestiside.model');

router.get('/list', function (req, res) {
    Producer.findAll({}).then(function (producer) {
        res.status(200).send(response(200, 'SUCCESSFULLY', producer));
    }).catch(err => {
        res.send(response(512, 'ERROR CREATE PRODUCER', err));
    });
})
router.post('/new', function (req, res) {
    Producer.create(req.body).then ( (producer) => {
        res.send(response(200, 'SUCCESSFULLY', producer));
    }).catch(err=> {
        res.send(response(512, 'ERROR CREATE PRODUCER', err));
    })
})
module.exports = router;