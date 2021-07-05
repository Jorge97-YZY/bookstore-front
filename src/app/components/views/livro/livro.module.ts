import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Imports Angular Matirial
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { LivroRoutingModule } from './livro-routing.module';
import { LivroReadComponent } from './livro-read/livro-read.component';
import { LivroCreateComponent } from './livro-create/livro-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LivroDeleteComponent } from './livro-delete/livro-delete.component';
import { LivroUpdateComponent } from './livro-update/livro-update.component';


@NgModule({
  declarations: [
    LivroReadComponent,
    LivroCreateComponent,
    LivroDeleteComponent,
    LivroUpdateComponent
  ],
  imports: [
    CommonModule,
    LivroRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule
  ]
})
export class LivroModule { }
