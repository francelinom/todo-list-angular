import { TaskService } from 'src/app/shared/service/task.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/shared/models/task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css'],
})
export class TaskCardComponent implements OnInit {
  @Input() tasks: Task[] = [];

  taskSelecionada!: Task;
  mensagem: string = '';
  pageSize: number = 5;
  paginaAtual: number = 1;

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

  ngOnInit(): void {}

  iniciarListaTask() {
    this.taskService.getListAll().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
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

  preparaDelecao(task: Task) {
    this.taskSelecionada = task;
  }

  onDelete(event: any) {
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
