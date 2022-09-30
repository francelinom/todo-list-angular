import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  {
    path: '',
    component: TaskListComponent,
  },
  {
    path: 'taskForm/:id',
    component: TaskFormComponent,
  },
  {
    path: 'taskForm',
    component: TaskFormComponent,
  },
  {
    path: 'task-progress',
    component: TaskFormComponent,
  },
  {
    path: 'task-notstarted',
    component: TaskFormComponent,
  },
  {
    path: 'task-completed',
    component: TaskFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
