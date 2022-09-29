import { TaskService } from 'src/app/service/task.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  formulario!: FormGroup;
  mensagem: string = '';
  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      title: [null, [Validators.required, Validators.min(4)]],
      description: [null, [Validators.required, Validators.min(4)]],
      deadLine: [null, Validators.required],
      status: [null, Validators.required],
    });
  }

  salvarTask() {
    this.taskService.createTask(this.formulario.value).subscribe(
      (resp) => {
        this.mensagem = 'Tarefa cadastrada com sucesso!';
        this.formulario.reset();
      },
      (error) =>
        (this.mensagem =
          'Erro ao cadastrar tarefa. Por favor, tente mais tarde!')
    );
    this.mensagem = '';
  }

  verificaValidTouched(campo: any) {
    return (
      !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched
    );
  }

  aplicaCssErro(campo: any) {
    return {
      'is-invalid': this.verificaValidTouched(campo),
    };
  }
}
