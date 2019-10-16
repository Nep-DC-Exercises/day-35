const express = require("express"),
    es6Renderer = require("express-es6-template-engine"),
    compression = require("compression"),
    helmet = require("helmet"),
    app = express();

app.listen(3333, function() {
    console.log("Listening on port 3333.");
});

// Middleware
app.use(compression());
app.use(helmet());

// ES6 Template Engine Express-ES6-Template Engine
app.engine("html", es6Renderer);
app.set("views", "./views");
app.set("view engine", "html");

// Creating routes
// Every controller will talk to a model that populates a view
const rootController = require("./routes/index.js"),
    allController = require("./routes/all.js"),
    wpController = require("./routes/wp.js"),
    personController = require("./routes/person.js");

// Routes
// Express USE the router that we've exported
app.use("/", rootController);
app.use("/all", allController);
app.use("/wp", wpController);
app.use("/person", personController);
