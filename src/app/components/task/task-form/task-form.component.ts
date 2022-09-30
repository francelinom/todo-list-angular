import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/shared/service/task.service';
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
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      const id = params['id'];
      if (id) {
        this.taskService.getById(id).subscribe((task) => {
          this.updateForm(task);
        });
      }
    });

    this.iniciarForm();
  }

  iniciarForm() {
    this.formulario = this.formBuilder.group({
      id: [null],
      title: [null, [Validators.required, Validators.min(4)]],
      description: [null, [Validators.required, Validators.min(4)]],
      deadLine: [null, Validators.required],
      status: [null, Validators.required],
    });
  }

  updateForm(task: any) {
    this.formulario.patchValue({
      id: task.id,
      title: task.title,
      description: task.description,
      deadLine: task.deadLine,
      status: task.status,
    });
  }

  salvarTask() {
    if (this.formulario.value.id) {
      console.log(this.formulario.value);
      this.taskService.updateTask(this.formulario.value).subscribe(
        (resp) => {
          console.log(resp);
          this.mensagem = 'Tarefa atualizada com sucesso!';
          this.formulario.reset();
        },
        (error) =>
          (this.mensagem =
            'Erro ao atualizada tarefa. Por favor, tente mais tarde!')
      );
    } else {
      this.taskService.createTask(this.formulario.value).subscribe(
        (resp) => {
          this.mensagem = 'Tarefa cadastrada com sucesso!';
          this.formulario.reset();
        },
        (error) =>
          (this.mensagem =
            'Erro ao cadastrar tarefa. Por favor, tente mais tarde!')
      );
    }

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
