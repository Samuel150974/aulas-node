import express from 'express';

//  carregando o framework express app; ta´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
const app = express();

// Configuramos o EJS como nossa engine de visualização (templante engine)

// Isso nos permite usar arquivos .ejs para gerar páginas HTML dinamicamente
app.set('view engine', 'ejs');

// CONFIGURANDO ROTAS (rota é um caminho que o usuário pode acessar via naveador, ou seja, o endereço da página)

app.get('/', (req,res) => {
res.render('index');
})

app.get('/sobre', (req,res) => {
res.render('sobre');
})

app.get('/404', (req,res) => {
res.render('404');
})

// Subindo o servidor

let porta = 8080;
app.listen(porta, )