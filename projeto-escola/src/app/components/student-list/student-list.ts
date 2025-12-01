import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAluno } from '../../interfaces/IAluno';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {

  @Output() excluir: EventEmitter<number> = new EventEmitter()

  @Input() lista: IAluno[] = [];

  @Input() titulo: string = '';

  excluirAluno(matricula: number): void {
    // Dizendo para o componente executar o evento 'excluir' e enviar para o componente 
    // externo o valor do parâmetro 'matricula'
    this.excluir.emit(matricula)
  }

}
