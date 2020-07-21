var express = require("express");

var path = require("path");

var hBars = require("express-handlebars");

var routes = require("./controllers/burger_controllers.js");

var PORT = process.env.PORT || 3306;

var app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", hBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });