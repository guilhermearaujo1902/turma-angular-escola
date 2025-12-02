import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAluno } from '../../interfaces/IAluno';

@Component({
  selector: 'app-student-form',
  standalone: false,
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm {

  @Output() fecharForm: EventEmitter<void> = new EventEmitter()

  @Input() aluno: IAluno = {
    nome: '',
    matricula: 0,
    curso: '',
    email: '',
    materias: [],
    situacao: false
  };

  alunoEdicao: IAluno = {
    nome: '',
    matricula: 0,
    curso: '',
    email: '',
    materias: [],
    situacao: false
  };

  // Executar assim que o componente é inicializado
  ngOnInit(): void {
    // Criando uma cópia do objeto recebido de maneira externa e atribuindo os valores
    // para o objeto interno, sem manter o vínculo entre esses objetos
    this.alunoEdicao = {...this.aluno}
  }

  salvar(): void {
    console.log(this.alunoEdicao)
  }

  cancelar(): void {
    this.fecharForm.emit()
  }

}
