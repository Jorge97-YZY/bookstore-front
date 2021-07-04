import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro } from './../../../models/livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  baseUrl: string = environment.baseUrl;

constructor(
  private http: HttpClient
) { }

findAllByCategoria(id_cat: string): Observable<Livro[]>{
  const url = `${this.baseUrl}/livros?categoria=${id_cat}`
  return this.http.get<Livro[]>(url);
}

}
