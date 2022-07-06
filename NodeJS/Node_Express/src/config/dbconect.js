import mongoose from 'mongoose'

mongoose.connect(/* Inserir a url do mongoDB*/);

let db = mongoose.connection;

export default db;