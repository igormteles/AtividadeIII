import  express  from "express";
import {criarLivro, consultarLivros, buscaLivro, atualizaLivro, excluiLivro} from './controller/bibliotecaController';

const app = express();

const PORT = 3000;

app.use(express.json());

app.post("/api/livro", criarLivro);
app.get("/api/livros", consultarLivros);
app.get("/api/livro/:id", buscaLivro);
app.put("/api/livro", atualizaLivro);
app.delete("/api/livro", excluiLivro);

app.listen(PORT, ()=> console.log("Api online na porta: " + PORT));