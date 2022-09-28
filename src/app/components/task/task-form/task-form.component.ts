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
  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      title: [null],
      description: [null],
      createdAt: [null],
      deadLine: [null],
      updatedAt: [null],
      status: [null],
    });
  }

  salvarTask() {
    this.taskService.createTask(this.formulario.value).subscribe((resp) => {
      console.log(resp);
    });
  }
}
