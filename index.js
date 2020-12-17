const express = require("express");
const session = require("express-session");
const router = require("./routers");
const app = express();
const port = 3000;
app.use(
  session({
    secret: "hacktivpairproject-cashier",
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  })
);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(process.env.PORT || port, () => {
  console.log("Running on", port);
});
