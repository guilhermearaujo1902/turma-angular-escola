export interface IAluno {
    nome: string,
    matricula: number,
    curso: string,
    email: string,
    materias: string[],
    situacao: boolean,
    imagem?: string,
}
