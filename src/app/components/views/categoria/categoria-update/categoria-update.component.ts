import { SharedService } from './../../../../shared/shared.service';
import { Categoria } from './../../../../models/categoria.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  formCategoria!: FormGroup;
  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  };
  constructor(
    private service: CategoriaService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.findById();
    this.createForm();


  }

  findById(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.service.findById(id).subscribe((resposta) => {
      this.updateForm(resposta);
    });
  }
  createForm() {
    this.formCategoria = this.fb.group({
      id: [''],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.minLength(3)]]
    })
  }
  updateForm(categoria: Categoria) {
    this.formCategoria.patchValue({
      id: categoria.id,
      nome: categoria.nome,
      descricao: categoria.descricao
    })
  }

  onUpDate(): void {

    console.log(this.formCategoria.value)
    this.service.update(this.formCategoria.value).subscribe((resposta) => {
      this.router.navigate(['categorias']);
      this.sharedService.message('Categoria editada com Sucesso!');
    }, err => {
      console.log(err)
    });
  }

  onCancel(): void {
    this.router.navigate(['categorias']);
  }


}
