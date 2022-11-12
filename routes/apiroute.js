const fs = require('fs');
const path = require('path');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    let results = JSON.parse(fs.readFileSync('./db/db.json'));
    res.send(results)
})


module.exports = router;