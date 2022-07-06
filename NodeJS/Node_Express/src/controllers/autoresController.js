import autoresDB from "../models/autor.js"

class AutorController {

    static ListarAutores = (request, response) => {
        autoresDB.find((err, autores) => {
            if(err){
                response.status(400).send({message: `${err} - Impossível listar os autores`})
            } else {
                response.status(200).send(autores);
            }
        })
    };

    static ListarAutorID = (request, response) => {
        const id = request.params.id;

        autoresDB.findById(id, (err, autores) => {
            if(err){
                response.status(400).send({message: `${err} - Id não encontrado`});
            } else if(autores === null){
                response.status(400).send(`Autor não cadastrado`);
            } else {
                response.status(200).send(autores);
            }
        });
    };

    static CadastrarAutor = (request, response) => {
        let NewAutor = new autoresDB(request.body);

        NewAutor.save((err) =>{
            if(err){
                response.status(500).send({message: `${err} - Falha ao cadastrar novo autor`})
            } else {
                response.status(201).send(NewAutor.toJSON())
            }
        })
    };

    static AtualizarAutor = (request, response) => {
        const id = request.params.id;

        autoresDB.findByIdAndUpdate(id, {$set: request.body}, (err) =>{
            if(!err){
                response.status(200).send({message: 'Autor atualizado com sucesso'})
            } else {
                response.status(500).send({message: err.message})
            }
        })
    }

    static DeletarAutor = (request, response) => {
        const id = request.params.id;

        autoresDB.findByIdAndDelete(id, (err, livros) => {
            if(!err) {
                response.status(200).send({message: 'Autor removido com sucesso'})
            } else {
                response.status(500).send({message: `Não foi possível remover`})
            }
        })
    };
};

export default AutorController;