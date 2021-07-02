import { Categoria } from './../categoria.model';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  formCategoria!: FormGroup;
  categoria: Categoria ={
    id: '',
    nome: '',
    descricao: ''
  }
  constructor(
    private service: CategoriaService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.categoria.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

 findById():void{
   this.service.findById(this.categoria.id!).subscribe((resposta)=>{
    this.categoria = resposta;
    console.log(this.categoria);
   });
 }

 createForm() {
  this.formCategoria = this.fb.group({
    nome: ['', Validators.required],
    descricao: ['', Validators.required]
  })
}

oncancel():void{
  this.router.navigate(['categorias']);
}

}
