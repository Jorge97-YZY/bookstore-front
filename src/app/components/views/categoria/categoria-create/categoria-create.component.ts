import { SharedService } from './../../../../shared/shared.service';
import { Categoria } from '../../../../models/categoria.model';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  formCategoria!: FormGroup;
  submitted = false;
  constructor(
    private service: CategoriaService,
    private fb: FormBuilder,
    private router:Router,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
 

createForm() {
  this.formCategoria = this.fb.group({
    nome: ['', Validators.required],
    descricao: ['', Validators.required]
  })
}

onSubmit(): void{
      this.service.create(this.formCategoria.value).subscribe((resposta)=>{
        this.router.navigate(['categorias']);
        this.sharedService.message('Categoria criada com Sucesso!');
      }, err =>{
        for(let i = 0; i < err.error.errors.length; i++){
          this.sharedService.message(err.error.errors[i].message);
        }
      });
}
oncancel():void{
  this.router.navigate(['categorias']);
}
}
