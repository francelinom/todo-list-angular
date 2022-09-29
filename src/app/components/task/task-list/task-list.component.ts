import { TaskService } from './../../../service/task.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  status: any[] = [
    {
      valor: 'ANDAMENTO',
      label: 'Em andamento',
    },
    {
      valor: 'NAOINICIADA',
      label: 'Não iniciada',
    },
    {
      valor: 'CONCLUIDA',
      label: 'Concluída',
    },
  ];

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.taskService.getListAll().subscribe((tasks) => {
      this.tasks = tasks;
      console.log(this.tasks);
    });
  }

  onEdit(id: number) {
    this.router.navigate(['taskForm', id], {
      relativeTo: this.route,
    });
  }

  formatarStringStatus(valor: string) {
    return this.status.find((x) => x.valor === valor)?.label;
  }
}
