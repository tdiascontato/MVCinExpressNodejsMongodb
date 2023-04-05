//const HomeModel = require('../Models/HomeModel.js')

exports.PaginaInicial = (req, res) =>{
    res.render('index',{
        titulo: 'Título do Tiago, qual é o seu nome?',
        descricao: ['Descrição', 'do', 'Tiago']
    });
};
exports.Post = (req, res,next) =>{
    res.send(`Bem vindo ao sistema, ${req.body.pessoa}`);
    next();
};