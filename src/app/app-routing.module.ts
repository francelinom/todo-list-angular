import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/task/task.module').then((m) => m.TaskModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, HttpClientModule],
})
export class AppRoutingModule {}
