import { Request, Response } from "express";
import { BibliotecaService } from "../service/bibliotecaService"; 

const bibliotecaService = new BibliotecaService();

export async function criarLivro (req: Request, res: Response){
    try {
        const novoLivro = await bibliotecaService.criarLivro(req.body);
        res.status(201).json(
            {
                mensagem:"Livro adicionado com sucesso!",
                produto:novoLivro
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function consultarLivros (req: Request, res: Response){
    try {
        const livros = await bibliotecaService.consultarLivros();
        res.status(200).json(
            {
                mensagem:"Livros consultados com sucesso!",
                livros:livros
            }
            );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function buscaLivro (req: Request, res: Response){
    try {
        const livro = await bibliotecaService.buscaLivro(req.query.id);
        res.status(200).json(
            {
                mensagem:"Livro encontrado com sucesso!",
                livro:livro
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function atualizaLivro (req: Request, res: Response){
    try {
        const livro = await bibliotecaService.atualizaLivro(req.body);
        res.status(200).json(
            {
                mensagem:"Livro atualizado com sucesso!",
                livro:livro
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};

export async function excluiLivro (req: Request, res: Response){
    try {
        const livro = await bibliotecaService.deletaLivro(req.body);
        res.status(200).json(
            {
                mensagem:"Livro excluído com sucesso!",
                livro:livro
            }
        );
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }
};