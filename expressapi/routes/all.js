const express = require("express"),
    router = express.Router();

const data = {
    arsenal: [
        { name: "Lacazette", position: "striker" },
        { name: "Auba", position: "striker" },
        { name: "Luiz", position: "defender" }
    ]
};

// the slash is self-referential. Depends on what file you're currently in
router.get("/", (req, res) => {
    res.status(200)
    .render('template', {
        // anything listed as locals becomes a variable you can listen for in your template
        locals: {
            title: 'A list of arsenal players',
            arsenalPlayers: data.arsenal
        },
        partials: {
            partial: "partial-all"
        }
    })
});

module.exports = router;
