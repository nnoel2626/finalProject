const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//Database connetion
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@rentalshop-shard-00-00-t8ria.mongodb.net:27017,rentalshop-shard-00-01-t8ria.mongodb.net:27017,
rentalshop-shard-00-02-t8ria.mongodb.net:27017/rentalShop
?ssl=true&replicaSet=rentalShop-shard-0&authSource=admin&retryWrites=true`, {
    useNewUrlParser: true
}).catch((err) => {
    console.error(`database connection error: ${err}`);
    process.exit();
});


module.exports = {
    mongoose
};