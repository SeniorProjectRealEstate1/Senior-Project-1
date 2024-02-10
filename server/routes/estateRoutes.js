const router = require("express").Router();
const controllers = require("../controllers/controllers");
const auth = require("../controllers/auth")
router.get("/",controllers.getAll)
router.post("/signUp",auth.registerUser)
router.get("/email",auth.getUserEmail)
router.get("/name",auth.getUserByname)
router.get("/loginIn",auth.loginIn)

module.exports = router