import { SharedService } from './../../../../shared/shared.service';
import { Livro } from './../../../../models/livro.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit {

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
    console.log(this.id_cat)
    this.livro.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
    this.createForm()
    
  }

  findById(): void {
    this.service.findById(this.livro.id!).subscribe((resposta) => {
      this.updateForm(resposta);
    });
  }

  createForm() {
    this.formLivro = this.fb.group({
      id: [''],
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      nome_autor: ['', [Validators.required, Validators.minLength(3)]],
      texto: ['', [Validators.required, Validators.minLength(10)]]
    })
  }


  updateForm(livro: Livro) {
    this.formLivro.patchValue({
      id: livro.id,
      titulo: livro.titulo,
      nome_autor: livro.nome_autor,
      texto: livro.texto
    })
  }

  onSubmit() {
    this.service.update(this.formLivro.value).subscribe((resposta) => {
      this.router.navigate([`/categorias/${this.id_cat}/livros`]);
      this.sharedService.message('Livro Editado com Sucesso!');
    }, err =>{
      this.router.navigate([`/categorias/${this.id_cat}/livros`]);
      this.sharedService.message('Falha ao Editar Livro! Tente mais tarde...');
    });
  }

  oncancel(): void {
    this.router.navigate([`/categorias/${this.id_cat}/livros`]);
  }

}
