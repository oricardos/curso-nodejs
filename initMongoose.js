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

//MODEL USUÁRIOS
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});