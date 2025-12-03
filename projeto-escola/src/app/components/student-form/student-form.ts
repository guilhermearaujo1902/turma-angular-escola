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
  @Output() salvar: EventEmitter<IAluno> = new EventEmitter()

  @Input() aluno: IAluno | null = null;

  alunoEdicao!: IAluno;

  // Executar assim que o componente é inicializado
  ngOnInit(): void {
    // Criando uma cópia do objeto recebido de maneira externa e atribuindo os valores
    // para o objeto interno, sem manter o vínculo entre esses objetos
    if (this.aluno) {
      this.alunoEdicao = {...this.aluno}
    } else {
      this.alunoEdicao = {
        nome: '',
        matricula: -1,
        curso: '',
        email: '',
        materias: [],
        situacao: false
      };
    }
  }

  salvarForm(): void {
    this.salvar.emit(this.alunoEdicao)
  }

  cancelar(): void {
    this.fecharForm.emit()
  }

}
