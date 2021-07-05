import { LivroDeleteComponent } from './livro-delete/livro-delete.component';
import { LivroCreateComponent } from './livro-create/livro-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroReadComponent } from './livro-read/livro-read.component';

const routes: Routes = [
  {
    path: '', component: LivroReadComponent
  },
  {
    path: 'create', component: LivroCreateComponent
  },
  {
    path: 'delete/:id', component: LivroDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivroRoutingModule { }
