const express = require("express"),
    router = express.Router();

router.get("/", (req, res) => {
    res.status(200)
        .render('template', {
            locals: {
                title: 'Meow'
            },
            partials: {
                partial: "partial-cats"
            }
        })
});

module.exports = router;
