const express = require("express")
const authMiddleware = require("../middleware/session")
const checkRol = require("../middleware/rol")
const { getItems, getItem, createItem, updateItem, deleteItem} = require("../controllers/tracks");
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks');
const router = express.Router()
/**
 * lista los items 
 */
router.get("/",authMiddleware, getItems);
/**
 * obtener detalle de item 
 */
router.get("/:id", authMiddleware, validatorGetItem, getItem);
/**
 * crear un registro
 */
router.post("/", authMiddleware, checkRol(["admin"]), validatorCreateItem, createItem);
/**
 * actualizar un registro
 */
router.put("/:id",  authMiddleware,validatorGetItem, validatorCreateItem, updateItem);
/* obtener detalle de item 
*/
router.delete("/:id", authMiddleware,validatorGetItem, deleteItem);
module.exports = router;
