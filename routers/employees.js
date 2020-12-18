const Controller = require("../controllers/EmployeeController");
const authentication = require("../middlewares/authentication");

const router = require("express").Router();

router.get("/register", Controller.showRegister);
router.post("/register", Controller.register);
router.get("/login", Controller.showLogin);
router.post("/login", Controller.login);
router.use(authentication)

router.get("/logout", Controller.logout);
module.exports = router;
