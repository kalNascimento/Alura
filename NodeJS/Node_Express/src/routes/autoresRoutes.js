import express from 'express';
import AutorController from '../controllers/autoresController.js';

const router = express.Router();

router
    .get('/autores', AutorController.ListarAutores)
    .get('/autores/:id', AutorController.ListarAutorID)
    .post('/autores', AutorController.CadastrarAutor)
    .put('/autores/:id', AutorController.AtualizarAutor)
    .delete('/autores/:id', AutorController.DeletarAutor)

export default router;