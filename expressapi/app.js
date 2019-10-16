const express = require("express"),
    compression = require("compression"),
    helmet = require("helmet"),
    app = express();

app.listen(3333, function() {
    console.log("Listening on port 3333.");
});

// Middleware
app.use(compression());
app.use(helmet());

// Routes
const rootController = require("./routes/index.js");

const data = {
    arsenal: [
        { name: "Lacazette", position: "striker" },
        { name: "Auba", position: "striker" },
        { name: "Luiz", position: "defender" }
    ]
};

// Routes
app.get("/", rootController);

app.get("/all", function(req, res) {
    let json = {
        data
    };

    res.status(200)
        .send(json)
        .end();
});

app.get("/wp", function(req, res) {
    // Destructuring?
    const { name } = req.query;
    let snippet = `<h1>Hello ${name}</h1>`;

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
