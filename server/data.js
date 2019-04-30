// [{
//         _id: 5 ca7939ec6df8f091d77a81d,
//         name: 'test124',
//         brand: 'Dell',
//         model: 'Ultima',
//         serialNumber: '7890123',
//         price: 20.25,
//         imageUrl: '/images/tube'
//     },
//     {
//         _id: 5 ca7939ec6df8f091d77a81e,
//         name: 'videocamera',
//         brand: 'sony',
//         model: 'ts4000',
//         serialNumber: '1254566',
//         price: 19.99,
//         imageUrl: '/public/images/hdzoom_cam.jpg'
//     },
//     {
//         _id: 5 ca7939ec6df8f091d77a81f,
//         name: 'sound_system',
//         brand: 'biamp',
//         model: 't-25',
//         serialNumber: '1254566',
//         price: 19.99,
//         imageUrl: '/public/images/'
//     },
//     {
//         _id: 5 ca7b69d80cb786950477f4c,
//         name: 'Casette',
//         brand: 'TDK',
//         serialNumber: '1`23345656',
//         price: 60,
//         imageUrl: '/images/radio.jpg',
//         __v: 0
//     },
//     {
//         _id: 5 ca8fd77dd144913e128e0af,
//         name: 'Cable Box',
//         brand: 'AT&T',
//         model: 'T-2590',
//         serialNumber: '12345',
//         price: 23.999,
//         imageUrl: '/images/cabletv',
//         __v: 0
//     },
//     {
//         _id: 5 caa0614ddae2d064b17c911,
//         name: 'TV',
//         brand: 'Samsung',
//         model: 'T6465',
//         serialNumber: '7890123',
//         price: 23.999,
//         imageUrl: '/images/tv.jpg',
//         __v: 0
//     },
//     {
//         _id: 5 caaac31b3ef641a1f2591ee,
//         name: 'sound_system22',
//         brand: 'Mackentoch',
//         model: 'Ultima',
//         serialNumber: '7890123',
//         price: 60,
//         imageUrl: '/images/sound-system.jpg',
//         __v: 0
//     },
//     {
//         _id: 5 caaac37b3ef641a1f2591ef,
//         name: 'sound_system22',
//         brand: 'Mackentoch',
//         model: 'Ultima',
//         serialNumber: '7890123',
//         price: 60,
//         imageUrl: '/images/sound-system.jpg',
//         __v: 0
//     },
//     {
//         _id: 5 caaacaeb3ef641a1f2591f0,
//         name: 'sound_system278',
//         brand: 'TDK',
//         model: 'X250',
//         serialNumber: '12345',
//         price: 20.1,
//         imageUrl: '/images/sound-system.jpg',
//         __v: 0
//     },
//     {
//         _id: 5 caabd19d418f7211741ab43,
//         name: 'test1',
//         brand: 'Dell',
//         model: 'Ultima',
//         serialNumber: '7890123',
//         price: 20.25,
//         imageUrl: '/images/tube',
//         __v: 0
//     },
//     {
//         _id: 5 cab622ecb4b5109bee8193d,
//         name: 'sound_system100',
//         brand: 'brand45',
//         model: 'X2500',
//         serialNumber: '7890123',
//         price: 23.999,
//         imageUrl: '/images/sound-system100',
//         __v: 0
//     }
// ]

// exports.getEquipment = (req, res, next) => {
//     Equipment.find()
//         .then(equipment => {
//             //console.log(equipment);
//             req.session.equipmentData = equipment;
//             res.render('rental/equipment.pug', {
//                 equipment: equipment,
//                 pageTitle: 'Admin Equipment',
//                 path: '/admin/equipment',
//             });
//         })
//         .catch(err => console.log(err));
// };


// /* user GET a single  equipment */
// exports.getEquipmentDetails = (req, res, next) => {
//     console.log(req.params);
//     let equipmentId = req.params.equipmentid;
//     Equipment.findOne({
//             '_id': equipmentId
//         })
//         .then((equipment) => {
//             //console.log(equipment);
//             res.render('rental/equipment-details', {
//                 pageTitle: 'Equipment Details',
//                 path: '/rental/equipment-details',
//                 equipment: equipment
//             });
//         }).catch((err) => {
//             if (err) console.log(err);
//         });

// };

// /* user GET form to add equipment */
// exports.getAddEquipment = (req, res, next) => {
//     res.render('rental/add-equipment', {
//         pageTitle: 'Add Equipment',
//         path: '/rental/add-equipment',
//         // editing: false
//     });
// };

// /* rental Post Add-equipment */
// exports.postAddEquipment = (req, res, next) => {
//     const name = req.body.name;
//     const brand = req.body.brand;
//     const model = req.body.model;
//     const serialNumber = req.body.serialNumber;
//     const price = req.body.price;
//     const imageUrl = req.body.imageUrl;

//     const equipment = new Equipment({
//         name: name,
//         brand: brand,
//         model: model,
//         serialNumber: serialNumber,
//         price: price,
//         imageUrl: imageUrl
//     });
//     // equipmentSave = rentalhopService.create(equipment)
//     equipment.save()
//         .then(result => {
//             console.log('equipmentSave');
//             res.redirect('/rental/equipment');
//         })
//         .catch(err => {
//             console.log(err);
//         });
// };



// /* user GET an equipment to edit*/
// exports.getEditEquipment = (req, res, next) => {
//     //console.log(req.params.id);
//     let equipmentId = req.params.equipmentId;
//     Equipment.findOne({
//             '_id': equipmentId
//         })
//         .then((equipment) => {
//             res.render('rental/edit-equipment', {
//                 pageTitle: 'Equipment Details',
//                 path: '/rental/equipment',
//                 equipment: equipment
//             });
//         }).catch((err) => {
//             if (err) console.log(err);
//         });

// };

// /* rental POST edit equipment */
// exports.postEditEquipment = (req, res, next) => {
//     const equipmentId = req.body.equipmentId;
//     const updatedName = req.body.name;
//     const updatedBrand = req.body.brand;
//     const updatedModel = req.body.model;
//     const updatedSerialNumber = req.body.serialNumber;
//     const updatedPrice = req.body.price;
//     const updatedImageUrl = req.body.imageUrl;

//     Equipment.findOne(equipmentId)
//         .then(equipment => {
//             equipment.name = updatedName;
//             equipment.brand = updatedBrand;
//             equipment.model = updatedModel;
//             equipment.serialNumber = updatedSerialNumber;
//             equipment.price = updatedPrice;
//             equipment.imageUrl = updatedImageUrl;
//             return equipment.save();
//         })
//         // rentalhopService.update(req.params.equipmentId, putdata)
//         .then(result => {
//             console.log('UPDATED equipment!');
//             res.redirect('/rental/equipment');
//         })
//         .catch(err => console.log(err));
// };

// /* rental delete a piece of equipment */
// exports.postDeleteEquipment = (req, res) => {
//     const equipmentid = req.body.equipmentid;
//     Equipment.findOneAndDelete({
//             '_id': equipmentid
//         })
//         .then(() => {
//             console.log('DESTROYED EQUIPMENT');
//             res.redirect('/rental/equipment');
//         })
//         .catch(err => console.log(err));
// };



// formData.append('name', dataObj.value[0]);
// formData.append('brand', dataObj.value[1]);
// formData.append('model', dataObj.value[2]);
// formData.append('serialNumber', dataObj.value[3]);
// formData.append('price', dataObj.value[4]);

// formData.append('imageUrl', dataObj.value[5]);
//  var formData = document.getElementById('myForm');
//   let formData = new FormData(myForm);
//var inputValue = document.getElementById('the-file');
//  var name = document.getElementById("name").value;
//  var brand = document.getElementById("brand").value;
//  var model = document.getElementById("model").value;
//  var serialNumber = document.getElementById("serialNumber").value;
//  var price = document.getElementById("price").value;
//  var imageUrl = document.getElementById("imageUrl").value;
//  console.log(name + brand + model + serialNumber + price + imageUrl);

// document.getElementById("myBtn").addEventListener("click", displayDate);

// function displayDate() {
//   document.getElementById("demo").innerHTML = Date();
// }
// document.getElementById("form1").addEventListener('submit',functSubmit);
// function functSubmit(event) {
//   var msg  = document.getElementById("input1").value;
//   alert(msg);
// } 
// function myFunction() {
//     var elements = document.getElementById("myForm").elements;
//     var obj ={};
//     for(var i = 0 ; i < elements.length ; i++){
//         var item = elements.item(i);
//         obj[item.name] = item.value;
//     }

//     document.getElementById("demo").innerHTML = JSON.stringify(obj);
// }


//  var elements = document.getElementById("myForm").elements;
//     for(var i = 0 ; i < elements.length ; i++){
//         var item = elements.item(i);
//         obj[item.name] = item.value;
//     }

//     document.getElementById("demo").innerHTML = JSON.stringify(obj);



// function getInputElements(formId) {
//   var formdata = document.getElementById(myform);
//   if (formdata === null) {
//     return null;
//     alert("please fill out the equipment form");
//   }
//   return formdata;
//   console.log(formdata);
//   }
//  var name = document.getElementById("name").value;
//  var brand = document.getElementById("brand").value;
//  var model = document.getElementById("model").value;
//  var serialNumber = document.getElementById("serialNumber").value;
//  var price = document.getElementById("price").value;
//  var imageUrl = document.getElementById("imageUrl").value;

//  var form = document.querySelector("form");
//  form.addEventListener("submit", function (event) {
//      console.log("Saving value", form.elements.value.value);
//      event.preventDefault();
//  });
//or
// function getInputElements(formId) {
//     var formdata = document.getElementById(formId);
//     if (form === null) {
//         return null;
//     }
//     return form.getElementsByTagName('input');
// }

// const options = {
//     hostname: 'example.com',
//     port: 443,
//     path: '/api/v1/test',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'token': '32rt35y43t43t'
//     