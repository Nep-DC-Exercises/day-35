const express = require("express"),
    router = express.Router();

router.get("/:person_name/:age?", (req, res) => {
    // Ex URL: http://localhost:3333/person/Nep/26
    // adding /:age? <- the question mark makes it not required
    const {person_name, age} = req.params
    const snippet = `<h1>Hi ${person_name}. You're ${age} years old.<h1>`;
    res.status(200)
        .send(snippet)
        .end();
});

module.exports = router;
