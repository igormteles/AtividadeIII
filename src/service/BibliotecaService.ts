import { Livro } from "../model/livro";
import { BibliotecaRepository } from "../repository/bibliotecaRepository";

export class BibliotecaService {
    bibliotecaRepository: BibliotecaRepository = new BibliotecaRepository

    async criarLivro(livroData: any): Promise<Livro> {
        const { title, author, publishedDate, isbn, pages, language, publisher } = livroData;
        if(!title || !author || !publishedDate || !isbn || !pages || !language || !publisher ){
            throw new Error("Informações incompletas");
        }

        const novoLivro =  await this.bibliotecaRepository.criarLivro(title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Insert ", novoLivro);
        return novoLivro;
    }

    async consultarLivros(): Promise<Livro[]> {
        const livro =  await this.bibliotecaRepository.consultarLivros();
        console.log("Service - Filtrar Todos", livro);
        return livro;
    }

    async buscaLivro(livroData: any): Promise<Livro> {
        if(!livroData ){
            throw new Error("Informações incompletas");
        }
        const id = parseInt(livroData, 10);

        const livro =  await this.bibliotecaRepository.buscaLivro(id);
        console.log("Service - Filtrar", livro);
        return livro;
    }

    async atualizaLivro(livroData: any): Promise<Livro> {
        const { id, title, author, publishedDate, isbn, pages, language, publisher } = livroData;
        if(!title || !author || !publishedDate || !isbn || !pages || !language || !publisher || !id ){
            throw new Error("Informações incompletas");
        }

        const livro =  await this.bibliotecaRepository.atualizaLivro(id, title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Update ", livro);
        return livro;
    }

    async deletaLivro(livroData: any): Promise<Livro> {
        const { id, title, author, publishedDate, isbn, pages, language, publisher } = livroData;
        if(!title || !author || !publishedDate || !isbn || !pages || !language || !publisher || !id ){
            throw new Error("Informações incompletas");
        }

        const livro =  await this.bibliotecaRepository.deletaLivro(id, title, author, publishedDate, isbn, pages, language, publisher);
        console.log("Service - Delete ", livro);
        return livro;
    }
}