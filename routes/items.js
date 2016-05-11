/**
 * Created by Igor on 11.05.2016.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    var ret = { id: req.params.id };
    res.send(ret);
});

module.exports = router;