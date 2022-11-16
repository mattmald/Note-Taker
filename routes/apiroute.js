const fs = require('fs');
const path = require('path');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    let results = JSON.parse(fs.readFileSync('./db/db.json'));
    res.send(results)
});

router.post('/notes', (req, res) =>{
    let notes = JSON.parse(fs.readFileSync('./db/db.json'));
    notes.push({
        title: req.body.title,
        text: req.body.text,
        id: `${notes.length}`
    });
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes)
});

router.delete('/notes/:id', (req, res) => {
    let notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const notesIndex = notes.findIndex((note) => note.id === req.params.id)
    if(notesIndex === -1) return res.status(404).json({})
    notes.splice(notesIndex, 1)
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes)
})



module.exports = router;