import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {

  titulo = 'Sistema Alunos Proway';

  escola = {
    nome: 'Proway',
    cidade: 'Blumenau'
  }

  listaAlunos = [
    {
      nome: 'Harry',
      matricula: 111,
      curso: 'Frontend',
      email: 'harry@proway.com',
      materias: ['HTML', 'CSS'],
      imagem: 'harry.png'
    }, 
    {
      nome: 'Hermione',
      matricula: 222,
      curso: 'Backend',
      email: 'hermione@proway.com',
      materias: ['Java', 'PostgreSql'],
      imagem: 'hermione.png'
    },
    {
      nome: 'Rony',
      matricula: 333,
      curso: 'Dados',
      email: 'rony@proway.com',
      materias: ['Python', 'BI'],
      imagem: 'rony.png'
    }
  ]
}
