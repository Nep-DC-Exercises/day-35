const express = require("express"),
    router = express.Router();

router.get("/", (req, res) => {

    const {age} = req.query
    const birthYear = 2019 - age;

    // if user doesn't put an age query, prompt them to do so 
    let displayPartial = !age ? "partial-year-bad" : "partial-year";

    res.status(200)
        .render('template', {
            locals: {
                title: 'Year of Birth Calculator',
                year: birthYear
            },
            partials: {
                partial: displayPartial
            }
        })
});

module.exports = router;
