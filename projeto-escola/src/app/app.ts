import { Component } from '@angular/core';
import { IAluno } from './interfaces/IAluno';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {

  titulo: string = 'Sistema Alunos Proway'

  exibicao: string = 'cards'

  escola = {
    nome: 'Proway',
    cidade: 'Blumenau'
  }

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

  listaAlunosFiltro: IAluno[] = this.listaAlunos

  trocarExibicao(): void {
    if (this.exibicao == 'cards') {
      this.exibicao = 'lista'
    } else {
      this.exibicao = 'cards'
    }
  }

  filtrarAprovados(): void {
    // Criar uma lista de alunos aprovados
    const listaAprovados: IAluno[] = [];

    // Percorrer a lista de alunos
    this.listaAlunos.forEach( alunoAtual => {
      // Testar a propriedade situacao
      if (alunoAtual.situacao === true) {
        // Adicionando na lista somente os aprovados
        listaAprovados.push(alunoAtual)
      }
    });

    this.listaAlunosFiltro = listaAprovados
  }

  filtrarReprovados(): void {
    const listaReprovados: IAluno[] = this.listaAlunos.filter(aluno => aluno.situacao === false)
    this.listaAlunosFiltro = listaReprovados
  }

  filtrarTodos(): void {
    this.listaAlunosFiltro = this.listaAlunos
  }

  onExcluir(matricula: number): void {
    // Encontrar o index ou a posição do aluno, baseado no valor da matrícula recebida
    // por parâmetro
    const indexExcluir = this.listaAlunos.findIndex(aluno => aluno.matricula === matricula)

    // Testar se o index é válido
    if (indexExcluir >= 0) {

      // Excluir o aluno da lista através do index
      this.listaAlunos.splice(indexExcluir, 1)
    }

    this.filtrarTodos()
  }

}
