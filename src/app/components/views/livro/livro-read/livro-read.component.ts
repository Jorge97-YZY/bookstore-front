import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from './../livro.service';
import { Livro } from './../../../../models/livro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {


  displayedColumns: string[] = ['id', 'titulo', 'nome_autor','livros', 'accoes'];
  livros: Livro[] = [];
  id_cat: string = '';
  constructor(
    private service: LivroService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id')!;
    this.findAll();

  }

  findAll(): void{
    this.service.findAllByCategoria(this.id_cat).subscribe((resposta)=>{
      this.livros = resposta;
      console.log(this.livros);
    });
  }
  onBack(){
    this.router.navigate(['/categorias']);
  }

  navegarParaLivroCreate(){
    this.router.navigate([`/categorias/${this.id_cat}/livros/create`]);
  }
}
