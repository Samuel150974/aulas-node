// Subindo um servidor utilizando nodeJS

// Importando módulo nativo do node
import http from 'http';

// Importando módulo FS - File System
import fs from 'fs/promises';

const monitorRequisicao = (req, res) => {
    switch (req.url) {
        case '/':
            res.writeHead(200, { "Content-type": "text/html ; charset-utf-8" })
            // carregar e ler o conteúdo do arquivo index.html
            fs.readFile('paginas/index.html')
                .then(conteudo => res.end(conteudo));
            break;

        case '/sobre':
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })

            //  carregar/ler o conteúdo da página sobre.html

            fs.readFile('paginas/sobre.html')
                .then(conteudo => res.end(conteudo));
            break;

        default:
            res.writeHead(404)
    }
} // arrow function


//servidor

const servidor = http.createServer(monitorRequisicao);

servidor.listen(8080, () => {
       console.log('servidor rodando')
});
