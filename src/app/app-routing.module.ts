import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'categorias', loadChildren: () => import('./components/views/categoria/categoria.module').then(m => m.CategoriaModule)
  },
  {
    path:'categorias', loadChildren: () => import('./components/views/livro/livro.module').then(m => m.LivroModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
