import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAluno } from '../../interfaces/IAluno';

@Component({
  selector: 'app-student',
  standalone: false,
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {

  @Output() excluir: EventEmitter<number> = new EventEmitter()

  @Input() aluno!: IAluno
  @Input() escola!: any

  textoDestaque: string = '20px'

  excluirAluno(matricula: number): void {
    this.excluir.emit(matricula)
  }

}
