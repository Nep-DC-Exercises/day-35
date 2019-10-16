const express = require("express"),
    router = express.Router();

router.get("/", (req, res) => {
    res.status(200)
        .render('template', {
            locals: {
                title: 'Woof'
            },
            partials: {
                partial: "partial-dogs"
            }
        })
});

module.exports = router;
