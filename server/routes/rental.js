//rental.js
const path = require('path');
const express = require('express');
const rentalShopController = require('../controllers/rentalShop');
const rentalRouter = express.Router();

/* GET all the equipment. */
rentalRouter.get('/equipment', rentalShopController.getEquipment);

/* GET  a single equipment detail. */
rentalRouter.get('/equipment/:equipmentId', rentalShopController.getEquipment);

/* GET rental/equipment-details */
rentalRouter.get('/equipment-details/:equipmentid', rentalShopController.getEquipmentDetails);

/* GET rental/add-equipment  */
rentalRouter.get('/add-equipment', rentalShopController.getAddEquipment);

/* POST rental/add-equipment  */
rentalRouter.post('/add-equipment', rentalShopController.postAddEquipment);

/*  GET rental/edit-equipment*/
rentalRouter.get('/edit-equipment/:equipmentId', rentalShopController.getEditEquipment);

/* POST rental/edit-equipment or update*/
rentalRouter.put('/edit-equipment', rentalShopController.postEditEquipment);

/* Delete rental/delete-equipment*/
rentalRouter.post('/delete-equipment', rentalShopController.postDeleteEquipment);



module.exports = rentalRouter;