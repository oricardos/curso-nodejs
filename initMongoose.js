const mongoose = require('mongoose');

// Conecte-se ao banco de dados
mongoose.Promise = global.Promise; // defina o mongoose para usar as Promise do ES6
mongoose.connect('mongodb://localhost/test', {
    useMongoClient: true, // Use MongoClient em vez de conexão obsoleta
}).then(
    () => {
        console.log('Connected to MongoDB');
    }
).catch( (error) => {
    console.log('Error connecting to MongoDB: ', error);
});