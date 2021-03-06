import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro } from './../../../models/livro.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { delay, take, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  baseUrl: string = environment.baseUrl;

constructor(
  private http: HttpClient,
  private _snack: MatSnackBar
) { }

findById(id: string): Observable<Livro>{
  const url = `${this.baseUrl}/livros/${id}`;
  return this.http.get<Livro>(url);
}

findAllByCategoria(id_cat: string): Observable<Livro[]>{
  const url = `${this.baseUrl}/livros?categoria=${id_cat}`
  return this.http.get<Livro[]>(url).pipe(
    delay(2000)
  );
}

create(id_cat:string, livro: Livro): Observable<Livro>{
  const url = `${this.baseUrl}/livros?categoria=${id_cat}`
  return this.http.post<Livro>(url, livro);
}

update(livro: Livro): Observable<Livro>{
  const url = `${this.baseUrl}/livros/${livro.id}`;
  return this.http.put<Livro>(url, livro);
}


delete( id: string): Observable<Livro>{
  const url = `${this.baseUrl}/livros/${id}`;
  return this.http.delete<Livro>(url);

}

}
