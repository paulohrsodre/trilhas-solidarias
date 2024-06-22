import usuario from "../models/usuario.js";

class UsuarioController{

    static async listarLivros (req,res){
        try {
            const listaUsuarios = await usuario.find({});
            res.status(200).json(listaUsuarios);
        } catch (error) {
            res.status(500).send("Erro ao buscar usuários");
        }
    }

    static async cadastrarUsuario(req,res){
        try{
            const novoUsuario = await usuario.create(req.body);
            res.status(201).json({message:"criado com sucesso", usuario: novoUsuario});
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar usuario` });
        }
    }

}

export default UsuarioController;