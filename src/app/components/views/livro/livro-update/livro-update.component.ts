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
    private service: LivroService
  ) { }

  ngOnInit(): void {
    this.findById();
    this.createForm()
  }

  findById(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.service.findById(id).subscribe((resposta) => {
      this.updateForm(resposta);
    });
  }

  createForm() {
    this.formLivro = this.fb.group({
      id: [''],
      titulo: ['', Validators.required],
      nome_autor: ['', Validators.required],
      texto: ['', Validators.required]
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
      this.router.navigate([`categorias`]);
      this.service.message('Livro Editado com Sucesso!');
    });
  }

  oncancel() {
    this.router.navigate([`categorias`]);
  }

}
