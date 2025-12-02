import { Component } from '@angular/core';
import { IAluno } from './interfaces/IAluno';
import { StudentService } from './services/student';

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
  
  listaAlunos: IAluno[] = []
  listaAlunosFiltro: IAluno[] = []
  formularioVisivel: boolean = false

  constructor(private studentService: StudentService){}

  ngOnInit(): void {
    this.listaAlunos = this.studentService.getLista()
    this.listaAlunosFiltro = this.listaAlunos
  }

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

  abrirFormulario(): void {
    this.formularioVisivel = true
  }

  fecharFormulario(): void {
    this.formularioVisivel = false
  }

}
