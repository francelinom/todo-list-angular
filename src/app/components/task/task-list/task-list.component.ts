import { TaskService } from './../../../service/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getListAll().subscribe((tasks) => {
      this.tasks = tasks;
      console.log(this.tasks);
    });
  }
}
