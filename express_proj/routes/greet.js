const express = require("express"),
    router = express.Router();

router.get("/:person_name/", (req, res) => {
    
    const {person_name} = req.params

    res.status(200)
        .render('template', {
            locals: {
                title: "Greeting Demo",
                name: person_name
            },
            partials: {
                partial: "partial-greet"
            }
        })
});

module.exports = router;
