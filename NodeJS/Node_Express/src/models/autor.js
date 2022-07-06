import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nascimento: {type: String}
    },
    {
        versionKey: false
    }
);

const autoresDB = mongoose.model('autores', autorSchema);

export default autoresDB;