import { executarComandoSQL } from "../database/mysql";
import { Livro } from "../model/livro";

export class BibliotecaRepository {
    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS Vendas.Product (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL,
            publishedDate VARCHAR(255) NOT NULL,
            isbn VARCHAR(255) NOT NULL,
            pages DECIMAL(10,5) NOT NULL,
            language VARCHAR(255) NOT NULL,
            publisher VARCHAR(255) NOT NULL
        )`;

        try {
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async criarLivro(title: string, author: string, publishedDate: string, isbn: string, pages: number, language: string, publisher: string) :Promise<Livro>{
        const query = "INSERT INTO biblioteca.livro (title, author, publishedDate, isbn, pages, language, publisher) VALUES (?, ?, ?, ?, ?, ?, ?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [title, author, publishedDate, isbn, pages, language, publisher]);
            console.log('Livro criado com sucesso, ID: ', resultado.insertId);
            const livro = new Livro(resultado.insertId,title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Livro>((resolve)=>{
                resolve(livro);
            })
        } catch (err) {
            console.error('Erro ao inserir o livro:', err);
            throw err;
        }
    }

    async consultarLivros() :Promise<Livro[]>{
        const query = "SELECT * FROM biblioteca.livro" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Livro[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar os livros gerando o erro: ${err}`);
            throw err;
        }
    }

    async buscaLivro(id: number) :Promise<Livro>{
        const query = "SELECT * FROM biblioteca.livro where id = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Livro encontrado com sucesso, ID: ', resultado);
            return new Promise<Livro>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o livro de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async atualizaLivro(id: number, title: string, author: string, publishedDate: string, isbn: string, pages: number, language: string, publisher: string) :Promise<Livro>{
        const query = "UPDATE biblioteca.livro set title = ?, author = ?, publishedDate= ?, isbn = ?, pages = ?, language = ?, publisher = ? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [title, author, publishedDate, isbn, pages, language, publisher, id]);
            console.log('Livro atualizado com sucesso, ID: ', resultado);
            const livro = new Livro(id, title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Livro>((resolve)=>{
                resolve(livro);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o livro de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deletaLivro(id: number, title: string, author: string, publishedDate: string, isbn: string, pages: number, language: string, publisher: string) :Promise<Livro>{
        const query = "DELETE FROM biblioteca.livro where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Livro deletado com sucesso, ID: ', resultado);
            const livro = new Livro(id, title, author, publishedDate, isbn, pages, language, publisher);
            return new Promise<Livro>((resolve)=>{
                resolve(livro);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar o livro de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }
}