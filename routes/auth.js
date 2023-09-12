const express = require("express")
const {loginCtrl,registerCtrl} = require("../controllers/auth");
const router = express.Router()
const { validatorRegister, validatorLogin } = require("../validators/auth");


/**
 * crear un registro
 */
//TODO  http://localhost:3001/api/auth/login
//TODO  http://localhost:3001/api/auth/register
router.post("/register", validatorRegister, registerCtrl);

router.post("/login", validatorLogin, loginCtrl);




module.exports = router;            