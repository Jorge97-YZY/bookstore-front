import { SharedService } from './../../../../shared/shared.service';
import { Livro } from './../../../../models/livro.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrls: ['./livro-delete.component.css']
})
export class LivroDeleteComponent implements OnInit {

  formLivro!: FormGroup
  id_cat: string = '';
  livro: Livro = {
    id: '',
    titulo: '',
    nome_autor: '',
    texto: ''
  }
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: LivroService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.livro.id = this.route.snapshot.paramMap.get('id')!;
    this.createForm();
    this.findById();
  }

  findById(): void {
    this.service.findById(this.livro.id!).subscribe((resposta)=>{
      this.livro = resposta;
    });
  }

  createForm() {
    this.formLivro = this.fb.group({
      titulo: ['', Validators.required],
      nome_autor: ['', Validators.required],
      texto: ['', Validators.required]
    })
  }

  onSubmit(){
    this.service.delete(this.livro.id!).subscribe((resposta)=>{
      this.router.navigate([`categorias`]);
      this.sharedService.message('Livro apagado com Sucesso!');
    });
  }

  oncancel(){
    this.router.navigate([`/categorias/${this.id_cat}/livros`]);
  }

}
