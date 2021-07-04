import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroReadComponent } from './livro-read/livro-read.component';

const routes: Routes = [
  {
    path: '', component: LivroReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivroRoutingModule { }
