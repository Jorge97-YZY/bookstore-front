import { Livro } from './../../../../models/livro.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../livro.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {

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
      this.livro = resposta;
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




  oncancel(): void {
    this.router.navigate([`/categorias/${this.id_cat}/livros`]);
  }

}
