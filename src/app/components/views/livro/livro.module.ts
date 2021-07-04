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


@NgModule({
  declarations: [
    LivroReadComponent
  ],
  imports: [
    CommonModule,
    LivroRoutingModule,
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
