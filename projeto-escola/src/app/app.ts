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
    }
  ]

  exibirCards(): void {
    this.exibicao = 'cards'
  }

  exibirLista(): void {
    this.exibicao = 'lista'
  }

}
