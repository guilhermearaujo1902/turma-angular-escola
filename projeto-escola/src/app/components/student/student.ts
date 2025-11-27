import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: false,
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {

  @Input() aluno!: any
  @Input() escola!: any

  textoDestaque: string = '20px'

}
