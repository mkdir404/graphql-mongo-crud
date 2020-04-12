import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/clientes',{useNewUrlParser:true , useUnifiedTopology: true });

const clienteSchema  = new mongoose.Schema({
    nombre : String,
    apelligo : String,
    empresa : String,
    emails : Array,
    edad : Number,
    pedidos : Array
});

const Clientes = mongoose.model('clientes',clienteSchema);

export { Clientes };