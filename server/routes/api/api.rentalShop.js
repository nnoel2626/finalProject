//users.js
const express = require('express');
const router = express.Router();
const rentalShopController = require('../../controllers/rentalShop');



const rentalShopService = rentalShopController.rentalShopService;

router.use((req, res, next) => {
    res.set({
        // allow any domain, allow REST methods we've implemented
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers",
        // Set content-type for all api requests
        'Content-type': 'application/json'
    });
    if (req.method == 'OPTIONS') {
        return res.status(200).end();
    }
    next();
});

//----------------Read a list of equipment-----------------//
router.get('/', (req, res, next) => {
    console.log(req);
    rentalShopService.list()
        .then((equipment) => {
            console.log(`API: List images: ${equipment}`);
            res.status(200);
            res.send(JSON.stringify(equipment));
        });
    console.log("placeholder")
});

//----------------Read a single equipment---------------------//
router.get('/:equipmentId', (req, res, next) => {
    console.log(`finding ${req.params.equipmentId}`);
    rentalShopService.read(req.params.equipmentId)
        .then((equipment) => {
            console.log(`Found images: ${equipment}`);
            res.status(200);
            res.send(JSON.stringify(equipment));
        }).catch((err) => {
            res.status(404);
            res.end();
        });
});

//---------------POST update an piece of equipment--------------//
router.put('/:equipmentId', (req, res, next) => {
    console.log(`putting ${req.params.equipmentId}`);
    let putdata = req.body;
    rentalShopService.update(req.params.equipmentId, putdata)
        .then((updatedEquipment) => {
            res.status(200);
            res.send(JSON.stringify(updatedEquipment));
        }).catch((err) => {
            res.status(404);
            res.end();
        });
});

//-------------Post update an equipment---------------------//
router.post('/', async (req, res, next) => {
    const equipment = {
        name: req.body.name,
        brand: req.body.brand,
        model: req.body.model,
        serialNumber: req.body.serialNumber,
        price: req.body.price,
        imageUrl: req.body.imageUrl
    }
    try {
        const equipmentSave = await rentalShopService.create(equipment);
        res.status(201);
        res.send(JSON.stringify(equipmentSave));
    } catch (err) {
        console.log(err);
        throw new Error("equipmentSaveError", equipment);
    }
});

//---------Post create a piece of equipmen---------------//
router.post('/', async (req, res, next) => {
    const equipment = {
        name: req.body.name,
        brand: req.body.brand,
        model: req.body.model,
        serialNumber: req.body.serialNumber,
        price: req.body.price,
        imageUrl: req.body.imageUrl
    }
    try {
        const equipmentSave = await rentalShopService.create(equipment);
        res.status(201);
        res.send(JSON.stringify(equipmentSave));
    } catch (err) {
        console.log(err);
        throw new Error("equipmentSaveError", equipment);
    }
});

//---------- delete an equipment--------------//
router.delete('/:equipmentId', (req, res, next) => {
    let id = req.params.equipmentId;
    rentalShopService.delete(req.params.equipmentId)
        .then((equipment) => {
            console.log(`Deleted image: ${id}`);
            res.status(200);
            res.send(JSON.stringify(equipment));
        }).catch((err) => {
            res.status(404);
            res.end();
        });;
});

// error
router.use(function (err, req, res, next) {
    console.error(err);
    res.status(500);
    res.end();
});

module.exports = router;