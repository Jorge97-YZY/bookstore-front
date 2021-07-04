import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaCreateComponent } from './categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './categoria-delete/categoria-delete.component';
import { CategoriaReadComponent } from './categoria-read/categoria-read.component';
import { CategoriaUpdateComponent } from './categoria-update/categoria-update.component';

const routes: Routes = [
  {
    path: '', component: CategoriaReadComponent
  },
  {
    path: 'create', component: CategoriaCreateComponent
  },
  {
    path: 'delete/:id', component: CategoriaDeleteComponent
  },
  {
    path: 'update/:id', component: CategoriaUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
