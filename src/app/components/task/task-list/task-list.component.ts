import { TaskService } from '../../../shared/service/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  tasksProgress: Task[] = [];
  tasksNotStarted: Task[] = [];
  tasksCompleted: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.iniciarListaTask();
  }

  iniciarListaTask() {
    this.taskService.getListAll().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  iniciarListaProgress() {
    this.taskService.getListProgress().subscribe((tasksProgress) => {
      this.tasksProgress = tasksProgress;
    });
  }

  iniciarListaNotStarted() {
    this.taskService.getListNotStarted().subscribe((tasksNotStarted) => {
      this.tasksNotStarted = tasksNotStarted;
    });
  }

  iniciarListaCompleted() {
    this.taskService.getListCompleted().subscribe((tasksCompleted) => {
      this.tasksCompleted = tasksCompleted;
    });
  }

  pegarTabSelecionada(valor: string) {
    if (valor === 'nav-listAll') {
      this.iniciarListaTask();
    } else if (valor === 'nav-progress') {
      this.iniciarListaProgress();
    } else if (valor === 'nav-notstarted') {
      this.iniciarListaNotStarted();
    } else {
      this.iniciarListaCompleted();
    }
    valor = '';
  }
}
