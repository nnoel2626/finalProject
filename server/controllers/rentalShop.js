//rentalhop controller
const Equipment = require('../models/equipment');




exports.getEquipment = (req, res, next) => {
    Equipment.find()
        .then(equipment => {
            //console.log(equipment);
            req.session.equipmentData = equipment;
            res.render('rental/equipment.pug', {
                equipment: equipment,
                pageTitle: 'Admin Equipment',
                path: '/admin/equipment',
            });
        })
        .catch(err => console.log(err));
};


/* user GET a single  equipment */
exports.getEquipmentDetails = (req, res, next) => {
    console.log(req.params.equipmentId);
    rentalShopService.read(req.params.equipmentId)
        .then((equipment) => {
            //console.log(equipment);
            res.render('rental/equipment-details', {
                pageTitle: 'Equipment Details',
                path: '/rental/equipment-details',
                equipment: equipment
            });
        }).catch((err) => {
            if (err) console.log(err);
        });

};

/* user GET form to add equipment */
exports.getAddEquipment = (req, res, next) => {
    res.render('rental/add-equipment', {
        pageTitle: 'Add Equipment',
        path: '/rental/add-equipment',
        // editing: false
    });
};

/* rental Post Add-equipment  or create a piece of equipment*/
// exports.postAddEquipment = async, (req, res, next) => {
//     const equipment = {
//         name: req.body.name,
//         brand: req.body.brand,
//         model: req.body.model,
//         serialNumber: req.body.serialNumber,
//         price: req.body.price,
//         imageUrl: req.body.imageUrl
//     }
//     try {
//         const equipmentSave = await RentalShopService.create(equipment);
//         console.log('equipmentSave');
//         res.redirect('/rental/equipment');
//     } catch (err) {
//         console.log(err);
//         throw new Error("equipmentSaveError", equipment);
//     }

// };

/* rental Post Add-equipment */
exports.postAddEquipment = (req, res, next) => {
    const name = req.body.name;
    const brand = req.body.brand;
    const model = req.body.model;
    const serialNumber = req.body.serialNumber;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;

    const equipment = new Equipment({
        name: name,
        brand: brand,
        model: model,
        serialNumber: serialNumber,
        price: price,
        imageUrl: imageUrl
    });
    // equipmentSave = rentalhopService.create(equipment)
    equipment.save()
        .then(result => {
            console.log('equipmentSave');
            res.redirect('/rental/equipment');
        })
        .catch(err => {
            console.log(err);
        });
};

/* user GET an equipment to update*/
exports.getEditEquipment = (req, res, next) => {
    //console.log(req.params.id);
    let equipmentId = req.params.equipmentId;
    Equipment.findOne({
            '_id': equipmentId
        })
        .then((equipment) => {
            res.render('rental/edit-equipment', {
                pageTitle: 'Equipment Details',
                path: '/rental/equipment',
                equipment: equipment
            });
        }).catch((err) => {
            if (err) console.log(err);
        });

};

/* rental POST update equipment */
exports.postEditEquipment = (req, res, next) => {
    let putdata = req.body;
    rentalShopService.update(req.params.equipmentId, putdata)
        .then((updatedEquipment) => {
            console.log('UPDATED equipment!');
            res.redirect('/rental/equipment');
        })
        .catch(err => console.log(err));
};



/* rental delete a piece of equipment */
exports.postDeleteEquipment = (req, res) => {
    const equipmentid = req.body.equipmentid;
    Equipment.findOneAndDelete({
            '_id': equipmentid
        })
        .then(() => {
            console.log('DESTROYED EQUIPMENT');
            res.redirect('/rental/equipment');
        })
        .catch(err => console.log(err));
};



//Rental service Class 
class rentalShopService {

    static create(obj) {
        const equipment = new Equipment(obj);
        return equipment.save();
    }

    static update(id, data) {
        return Equipment.findById(id)
            .then((equipment) => {
                equipment.set(data);
                equipment.save();
                return equipment;
            });
    }

    static read(id) {
        return Equipment.findById(id)
            .then((equipment) => {
                // found
                return equipment;
            });
    }

    static list() {
        return Equipment.find({})
            .then((equipment) => {
                // found
                return equipment;
            });
    }

    static delete(id) {
        return Equipment.deleteOne({
                _id: id
            })
            .then((obj) => {
                //removed
                return obj;
            })
    }
}

module.exports.rentalShopService = rentalShopService;