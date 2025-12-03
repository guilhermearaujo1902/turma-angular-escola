import { Injectable } from '@angular/core';
import { IAluno } from '../interfaces/IAluno';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  listaAlunos: IAluno[] = [
    {
      nome: 'Harry',
      matricula: 1,
      curso: 'Frontend',
      email: 'harry@proway.com',
      materias: ['HTML', 'CSS'],
      imagem: 'harry.png',
      situacao: false
    }, 
    {
      nome: 'Hermione',
      matricula: 2,
      curso: 'Backend',
      email: 'hermione@proway.com',
      materias: ['Java', 'PostgreSql'],
      imagem: 'hermione.png',
      situacao: true
    },
    {
      nome: 'Rony',
      matricula: 3,
      curso: 'Dados',
      email: 'rony@proway.com',
      materias: ['Python', 'BI'],
      imagem: 'rony.png',
      situacao: false
    },
    {
      nome: 'Luna',
      matricula: 4,
      curso: 'Design',
      email: 'luna@proway.com',
      materias: ['UX/UI', 'Branding'],
      imagem: 'luna.png',
      situacao: true
    },
  ]

  sequenciaMatricula: number = 4

  // Implementação do CRUD

  // (READ) Serviço responsável por retornar a lista atualizada
  getLista(): IAluno[] {
    return this.listaAlunos
  }


  // (DELETE) Serviço responsável por excluir um aluno da lista
  delete(matricula: number): void {
    // Encontrar o index ou a posição do aluno, baseado no valor da matrícula recebida
    // por parâmetro
    const indexExcluir = this.listaAlunos.findIndex(aluno => aluno.matricula === matricula)

    // Testar se o index é válido
    if (indexExcluir >= 0) {

      // Excluir o aluno da lista através do index
      this.listaAlunos.splice(indexExcluir, 1)
    }
  }


  // (CREATE) Serviço responsável por inserir um aluno novo na lista
  add(novoAluno: IAluno): void {
    novoAluno.matricula = this.getSequenciaMatricula()
    novoAluno.imagem = 'usuario.png'
    this.listaAlunos.push(novoAluno)
  }


  // (UPDATE) Serviço responsável por atualizar dados de um aluno específico
  update(alunoEdicao: IAluno): void {
    const indexEdicao = this.listaAlunos.findIndex(
      aluno => aluno.matricula === alunoEdicao.matricula
    )

    if (indexEdicao >= 0) {
      this.listaAlunos.splice(indexEdicao, 1, alunoEdicao)
    }
  }


  // Serviço responsável por filtrar a lista de alunos por
  // 'Aprovados', 'Reprovados' ou 'Todos'
  filtrar(filtro: string): IAluno[] {
    switch(filtro) {
      case 'todos':
        return this.listaAlunos
      case 'aprovados':
        return this.listaAlunos.filter(aluno => aluno.situacao === true)
      case 'reprovados':
        return this.listaAlunos.filter(aluno => aluno.situacao === false)
      default:
        return []
    }
  }

  // Serviço local responsável por controlar a sequencia atual da matrícula
  private getSequenciaMatricula(): number {
    this.sequenciaMatricula++
    return this.sequenciaMatricula
  }

}
