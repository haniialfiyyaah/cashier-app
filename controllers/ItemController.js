"use strict";
const { Item } = require("../models");

class Controller {
  static list(req, res) {
    Item.findAll()
      .then((data) => res.render("items/list", { data }))
      .catch((err) => res.send(err));
  }
}

module.exports = Controller;
