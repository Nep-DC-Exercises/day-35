const express = require("express"),
    router = express.Router();

router.get("/", (req, res) => {
    res.status(200)
        .render('template', {
            locals: {
                title: 'Living Together'
            },
            partials: {
                partial: "partial-catDog"
            }
        })
});

module.exports = router;
