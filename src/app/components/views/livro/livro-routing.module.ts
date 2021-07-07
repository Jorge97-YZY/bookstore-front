import { LivroUpdateComponent } from './livro-update/livro-update.component';
import { LivroDeleteComponent } from './livro-delete/livro-delete.component';
import { LivroCreateComponent } from './livro-create/livro-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroReadComponent } from './livro-read/livro-read.component';

const routes: Routes = [
  {
    path: ':id_cat/livros', component: LivroReadComponent
  },
  {
    path: ':id_cat/livros/create', component: LivroCreateComponent
  },
  {
    path: ':id_cat/livros/:id/delete', component: LivroDeleteComponent
  },
  {
    path: ':id_cat/livros/:id/update', component: LivroUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivroRoutingModule { }
