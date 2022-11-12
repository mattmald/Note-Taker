const fs = require('fs');
const path = require('path');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});


module.exports = router;


//commented out 'node_modules\express\lib\router\index.js:469:13' make sure ot get it fixed