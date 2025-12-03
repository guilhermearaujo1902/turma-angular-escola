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
  
  listaAlunosFiltro: IAluno[] = []
  formularioVisivel: boolean = false
  alunoSelecionado: IAluno | null = null

  constructor(private studentService: StudentService){}

  ngOnInit(): void {
    this.listaAlunosFiltro = this.studentService.getLista()
  }

  trocarExibicao(): void {
    if (this.exibicao == 'cards') {
      this.exibicao = 'lista'
    } else {
      this.exibicao = 'cards'
    }
  }

  filtrar(filtro: string): void {
    this.listaAlunosFiltro = this.studentService.filtrar(filtro)
  }

  onExcluir(matricula: number): void {
    this.studentService.delete(matricula)
  }

  onSalvar(aluno: IAluno): void {

    if (aluno.matricula < 0) {
      this.studentService.add(aluno)
    } else {
      this.studentService.update(aluno)
    }

    this.alunoSelecionado = null
    this.fecharFormulario()
  }

  onEditar(alunoEditar: IAluno): void {
    this.alunoSelecionado = alunoEditar
    this.abrirFormulario()
  }

  abrirFormulario(): void {
    this.formularioVisivel = true
  }

  fecharFormulario(): void {
    this.formularioVisivel = false
  }

}
