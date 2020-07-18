var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll(function (data) {
        var burgersObject = {
            burgers: data
        };
        console.log(burgersObject);
        res.render("index", burgersObject);
    });
});

router.post("/", (req, res) => {

    if (req.body.burger_name === ''){
      console.log('not valid')
    } else {
      burger.insertOne(req.body.burger_name, function () {
        res.redirect("/");
    });
    }
});

router.post("/:id", (req, res) => {
    var id = req.params.id;
    burger.updateOne(id, function () {
        res.redirect("/");
    });
});

module.exports = router;