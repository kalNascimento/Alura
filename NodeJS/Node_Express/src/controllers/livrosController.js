import { query } from "express";
import livros from "../models/livros.js";

class LivroController {

    static ListarLivros = (request, response) => {
        livros.find((err, livros) => {
            response.status(200).json(livros)
        })
    }

    static ListarLivroID = (request, response) => {
        const id = request.params.id;

        livros.findById(id, (err, livros) => { 
            if(err) {
                response.status(400).send({message: `${err} - Id não encontrado`})
            } else {
                response.status(200).send(livros);
            }
        })
    }

    static ListarLivroPorEditora = (request, response) => {
        const editora = request.query.editora;

        livros.find({'editora': editora}, {}, (err, livros) =>{
            response.status(200).send(livros);
        })
    }

    static CadastrarLivro = (request, response) => {
        let livro = new livros(request.body);

        livro.save((err) =>{
            if(err){
                response.status(500).send({message: `${err} - Falha ao cadastrar livro`})
            } else {
                response.status(201).send(livro.toJSON())
            }
        })
    }

    static AtualizarLivro = (request, response) => {
        const id = request.params.id;

        livros.findByIdAndUpdate(id, {$set: request.body}, (err) =>{
            if(!err){
                response.status(200).send({message: 'Livro atualizado com sucesso'})
            } else {
                response.status(500).send({message: err.message})
            }
        })
    }

    static DeletarLivro = (request, response) => {
        const id = request.params.id;

        livros.findByIdAndDelete(id, (err, livros) => {
            if(!err) {
                response.status(200).send({message: 'Livro removido com sucesso'})
            } else {
                response.status(500).send({message: `Não foi possível remover`})
            }
        })
    }
}
export default LivroController;