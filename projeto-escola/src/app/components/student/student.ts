import { Component, Input } from '@angular/core';
import { IAluno } from '../../interfaces/IAluno';

@Component({
  selector: 'app-student',
  standalone: false,
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {

  @Input() aluno!: IAluno
  @Input() escola!: any

  textoDestaque: string = '20px'

}
