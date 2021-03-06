import { LivroReadComponent } from './livro-read/livro-read.component';
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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { LivroRoutingModule } from './livro-routing.module';
import { LivroCreateComponent } from './livro-create/livro-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LivroDeleteComponent } from './livro-delete/livro-delete.component';
import { LivroUpdateComponent } from './livro-update/livro-update.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LivroReadAllComponent } from './livro-read-all/livro-read.component';


@NgModule({
  declarations: [
    LivroReadAllComponent,
    LivroCreateComponent,
    LivroDeleteComponent,
    LivroUpdateComponent,
    LivroReadComponent
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
    MatSnackBarModule,
    MatProgressSpinnerModule,
    SharedModule
  ]
})
export class LivroModule { }
