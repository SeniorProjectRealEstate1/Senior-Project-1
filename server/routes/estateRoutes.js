const router = require("express").Router();
const controllers = require("../controllers/controllers");

router.get("/",controllers.getAll)

module.exports = router