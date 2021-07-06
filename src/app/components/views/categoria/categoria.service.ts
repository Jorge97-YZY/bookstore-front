import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Categoria } from '../../../models/categoria.model';
import { environment } from './../../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  findById(id: string): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias/${id}`;
    return this.http.get<Categoria>(url);

  }

  findAll(): Observable<Categoria[]> {
    const url = `${this.baseUrl}/categorias`;
    return this.http.get<Categoria[]>(url);
  }

  create(categoria: Categoria): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias`;
    return this.http.post<Categoria>(url, categoria);
  }

  update(categoria: Categoria): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias/${categoria.id}`;
    return this.http.put<Categoria>(url, categoria);
  }


  delete(id: string): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias/${id}`;
    return this.http.delete<Categoria>(url);
  }

}
