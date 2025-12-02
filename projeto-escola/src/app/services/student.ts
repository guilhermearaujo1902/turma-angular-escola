import { Injectable } from '@angular/core';
import { IAluno } from '../interfaces/IAluno';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  listaAlunos: IAluno[] = [
    {
      nome: 'Harry',
      matricula: 111,
      curso: 'Frontend',
      email: 'harry@proway.com',
      materias: ['HTML', 'CSS'],
      imagem: 'harry.png',
      situacao: false
    }, 
    {
      nome: 'Hermione',
      matricula: 222,
      curso: 'Backend',
      email: 'hermione@proway.com',
      materias: ['Java', 'PostgreSql'],
      imagem: 'hermione.png',
      situacao: true
    },
    {
      nome: 'Rony',
      matricula: 333,
      curso: 'Dados',
      email: 'rony@proway.com',
      materias: ['Python', 'BI'],
      imagem: 'rony.png',
      situacao: false
    },
    {
      nome: 'Luna',
      matricula: 444,
      curso: 'Design',
      email: 'luna@proway.com',
      materias: ['UX/UI', 'Branding'],
      imagem: 'luna.png',
      situacao: true
    },
  ]

  // Serviço responsável por retornar a lista atualizada
  getLista(): IAluno[] {
    return this.listaAlunos
  }


  // EXERCÍCIO

  // Serviço responsável por filtrar a lista de alunos por
  // 'Aprovados', 'Reprovados' ou 'Todos'

  
  // Serviço responsável por excluir um aluno da lista
  
}
