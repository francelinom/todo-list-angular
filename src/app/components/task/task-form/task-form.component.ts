import { TaskService } from 'src/app/service/task.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      title: [null],
      description: [null],
      deadLine: [null],
    });
  }

  salvarTask() {
    const form = {
      ...this.formulario.value,
      deadLine: this.formulario.value.deadLine + 'T09:00:00',
    };

    this.taskService.createTask(form).subscribe(
      (resp) => {
        this.mensagem = 'Tarefa cadastrada com sucesso!';
      },
      (error) =>
        (this.mensagem =
          'Erro ao cadastrar tarefa. Por favor tente mais tarde!')
    );
    this.mensagem = '';
  }
}
