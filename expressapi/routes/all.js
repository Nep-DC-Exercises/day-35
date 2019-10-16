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
    let json = { data };
    res.status(200)
        .send(json)
        .end();
});

module.exports = router;
