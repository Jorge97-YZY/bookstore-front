import { SharedService } from './../../../../shared/shared.service';
import { LivroService } from './../livro.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

  formLivro!: FormGroup
  id_cat: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: LivroService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id')!;
    this.createForm();
  }

  createForm() {
    this.formLivro = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      nome_autor: ['', [Validators.required, Validators.minLength(3)]],
      texto: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  onSubmit(){
   
    this.service.create(this.id_cat, this.formLivro.value).subscribe((resposta)=>{
      this.router.navigate([`categorias/${this.id_cat}/livros`]);
      this.sharedService.message('Livro criado com Sucesso!');
    }, err =>{
      for(let i = 0; i < err.error.errors.length; i++){
        this.sharedService.message(err.error.errors[i].message);
      }
    });
  }

  oncancel(){
    this.router.navigate([`/categorias/${this.id_cat}/livros`]);
  }

}
