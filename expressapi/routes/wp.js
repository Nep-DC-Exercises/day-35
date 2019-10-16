const express = require("express"),
    router = express.Router();

router.get("/", (req, res) => {
    // Ex URL: localhost:3333/wp?name=Name&age=26
    // The part to the right of the ? is the query string
    const { name, age } = req.query;
    let snippet = `<h1>Hello ${name}. ${age} is your age.</h1>`;

    if (!name) {
        snippet = `<h1>NO NAME PROVIDED!</h1>`;
        res.status(500)
            .send(snippet)
            .end();
    }

    res.status(200)
        .send(snippet)
        .end();
});

module.exports = router;
