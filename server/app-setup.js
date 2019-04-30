//app-setup.js
/*  This file exists to populate the database with some sample data
 */
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://mensah33:bety2626@rentalshop-shard-00-00-t8ria.mongodb.net:27017,rentalshop-shard-00-01-t8ria.mongodb.net:27017,rentalshop-shard-00-02-t8ria.mongodb.net:27017/rentalShop?ssl=true&replicaSet=rentalShop-shard-0&authSource=admin&retryWrites=true', {
        useNewUrlParser: true
    })
    // perform actions on the collection object
    .then(function () {
        // we're connected!
        console.log("connected!");


        // //User schema
        // const Schema = mongoose.Schema;
        // //create a userschema
        // const userSchema = new Schema({
        //     firstname: {
        //         type: String,
        //         required: true,
        //         maxlength: 255,
        //         unique: true
        //     },
        //     lastname: {
        //         type: String,
        //         required: true,
        //         maxlength: 255,
        //         unique: true
        //     },
        //     email: {
        //         type: String,
        //         required: true,
        //         maxlength: 255,
        //         unique: true
        //     },
        //     password: {
        //         type: String,
        //         maxlength: 255,
        //         required: true
        //     },
        //     isAdmin: {
        //         type: Boolean,
        //         default: false
        //     },
        //     created_at: Date,
        //     updated_at: Date
        // });


        // // intial admin login account
        // var User = mongoose.model('User', userSchema);
        // var user = [{
        //         firstname: 'Norcius',
        //         lastname: 'Noel',
        //         email: 'mensah33@domain.com',
        //         password: 'password',
        //         isAdmin: true
        //     },
        //     {
        //         firstname: 'John',
        //         lastname: 'Doe',
        //         email: 'john@domain.com',
        //         password: 'password',
        //         isAdmin: false
        //     },
        //     {
        //         firstname: 'MarieJane',
        //         lastname: 'Doe',
        //         email: 'marieJane@domain.com',
        //         password: 'password',
        //         isAdmin: false
        //     }
        // ];

        // var saves = user.map((u, i) => {
        //     return new User(u).save((err, savedUser) => {

        //         console.log(`saved ${i}`);
        //     });
        // });

        // Promise.all(saves).then(() => {
        //     User.find({}, (err, user) => {
        //         if (err) {
        //             console.log(err)
        //         }
        //         console.log(`found users! ${user}`);
        //     });
        // });


        // //Equipment schema
        // var equipmentSchema = mongoose.Schema({
        //     _id: Schema.Types.ObjectId,
        //     name: {
        //         type: String,
        //         required: true
        //     },
        //     brand: {
        //         type: String,
        //         required: true
        //     },
        //     model: {
        //         type: String,
        //         required: true
        //     },
        //     serialNumber: {
        //         type: String,
        //         required: true
        //     },
        //     price: {
        //         type: Number,
        //         required: true,
        //         min: 0
        //     },
        //     imageUrl: {
        //         type: String,
        //         required: true
        //     },
        //     // category: {
        //     //     type: string,
        //     //     ref: category,
        //     //     require: true
        //     // },
        //     createdAt: {
        //         type: Date
        //     },
        //     updatedAt: {
        //         type: Date
        //     }
        // });


        // //List of equipment
        // var Equipment = mongoose.model('Equipment', equipmentSchema);
        // var equipment = [{
        //     name: 'audiorecorder',
        //     brand: 'sony',
        //     model: 'L-185',
        //     serialNumber: '123456',
        //     price: "19.99",
        //     imageUrl: '/public/images/q3hd-1.jpg'
        // }, {
        //     name: 'dungle',
        //     brand: 'extron',
        //     model: 'l-185',
        //     serialNumber: '123789',
        //     price: "19.99",
        //     imageUrl: '/public/images/mac_dungle.jpg'
        // }, {
        //     name: 'laptop',
        //     brand: 'dell',
        //     model: 'Latitude',
        //     serialNumber: '123456',
        //     price: "19.99",
        //     imageUrl: '/public/images/dell_laptop.jpg'
        // }, {
        //     name: 'mac',
        //     brand: 'apple',
        //     model: 'Mac-Pro',
        //     serialNumber: '123789',
        //     price: "19.99",
        //     imageUrl: '/public/images/mac-pro.jpg'
        // }, {
        //     name: 'microphone',
        //     brand: 'shure',
        //     model: 'sm-58',
        //     serialNumber: '1255456',
        //     price: "19.99",
        //     imageUrl: '/public/images/shure_mic.jpg'
        // }, {
        //     name: 'projector',
        //     brand: 'sanyo',
        //     model: 'wtc-500',
        //     serialNumber: '1254566',
        //     price: "19.99",
        //     imageUrl: '/public/images/sanyo_projector.jpg'
        // }, {
        //     name: 'tripod',
        //     brand: 'manfrotto',
        //     model: 'T-25',
        //     serialNumber: '1254566',
        //     price: "19.99",
        //     imageUrl: '/public/images/tripod.jpg'
        // }, {
        //     name: 'videocamera',
        //     brand: 'sony',
        //     model: 'ts4000',
        //     serialNumber: '1254566',
        //     price: "19.99",
        //     imageUrl: '/public/images/hdzoom_cam.jpg'
        // }, {
        //     name: 'sound_system',
        //     brand: 'biamp',
        //     model: 't-25',
        //     serialNumber: '1254566',
        //     price: "19.99",
        //     imageUrl: '/public/images/'
        // }];


        // Equipment.collection.insertMany(equipment, onInsert);

        // function onInsert(err, docs) {
        //     if (err) {
        //         console.log(err)
        //     } else {
        //         console.info('%d equipment were successfully stored.', docs.length);
        //     }
        // };


    }).catch((err) => {
        console.error(err + "errored out!")
    });