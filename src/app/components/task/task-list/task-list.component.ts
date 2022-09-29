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
  taskSelecionada: any = {};
  mensagem: string = '';

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
    this.iniciarListaTask();
  }

  iniciarListaTask() {
    this.taskService.getListAll().subscribe((tasks) => {
      this.tasks = tasks;
      this.tasks.sort();
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

  preparaDelecao(task: any) {
    this.taskSelecionada = task;
  }

  onDelete() {
    this.taskService.deleteTask(this.taskSelecionada.id).subscribe(
      (resp) => {
        this.iniciarListaTask();
        this.mensagem = 'Tarefa deletada com sucesso!';
      },
      (error) => {
        this.mensagem = 'Erro ao deletar tarefa!';
      }
    );
  }
}
