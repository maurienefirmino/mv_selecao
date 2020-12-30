import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstabelecimentoService } from 'src/app/shared/service/Estabelecimento.service';

@Component({
  selector: 'app-formestabelecimento',
  templateUrl: './formestabelecimento.component.html',
  styleUrls: ['./formestabelecimento.component.css']
})
export class FormestabelecimentoComponent implements OnInit {

  public estabelecimentoForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private estabelecimentoService: EstabelecimentoService
  ) { }

  ngOnInit(): void {
    this.estabelecimentoForm = this.fb.group({
      nome:['',Validators.required],
      endereco:[''],
      telefone :[''],
    })
  }

  storeEstabelecimento(){
    this.estabelecimentoService.postData(this.estabelecimentoForm.value).subscribe(result=>{});
  }

}
