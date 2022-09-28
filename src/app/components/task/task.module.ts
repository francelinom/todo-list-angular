import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskComponent, TaskListComponent],
  imports: [CommonModule, TaskRoutingModule, FormsModule],
  exports: [TaskComponent, TaskListComponent],
})
export class TaskModule {}
