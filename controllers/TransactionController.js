"use strict";
const { getData, cancel, buyItems, destroy } = require("../helpers/buyItems");
const { Transaction, Item, ItemTransaction } = require("../models");

class Controller {
  static list(req, res) {
    // destroy()
    Transaction.findAll()
      .then((data) => res.render("transactions/cashier", { data }))
      .catch((err) => res.send(err));
  }

  static detail(req, res) {
    Transaction.findOne({
      where: {
        id: +req.params.id,
      },
      include: [Item],
    })
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  }

  static add(req, res) {
    Item.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    })
      .then((items) => {
        // res.send(items.cart)
        res.render("transactions/cashier", { items: items, cart: getData() });
      })
      .catch((err) => res.send(err));
  }

  static addItem(req, res) {
    const { ItemId, quantity } = req.body;

    Item.findOne({
      where: {
        id: ItemId,
      },
    })
      .then((data) => {
        buyItems(data, +quantity);
        res.redirect("/transactions/add");
      })
      .catch((err) => res.send(err));
  }

  static cancelItem(req, res) {
    let id = +req.params.id;
    cancel(id);
    res.redirect("/transactions/add");
  }

    static pay(req, res) {
        let items = getData()
        let idTransaction = 0
    
        Transaction
            .create({
                EmployeeId: req.session.EmployeeId
            })
            .then(data => {
                idTransaction = data.id
                let newList = []
                items.forEach(el => {
                    let itemTransaction = {
                        TransactionId: data.id,
                        ItemId: el.id,
                        quantity: el.quantity
                    }
                    newList.push(itemTransaction)
                });
                return ItemTransaction.bulkCreate(newList)
            })
            .then(data => {
                // res.send(data)
                res.redirect(`/transactions/${idTransaction}/detail`)
                destroy()
            })
            .catch(err => res.send(err))
    }
}

module.exports = Controller;
