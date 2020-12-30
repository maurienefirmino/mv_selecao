import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estabelecimento } from 'src/app/shared/model/Estabelecimento.model';
import { EstabelecimentoService } from 'src/app/shared/service/Estabelecimento.service';
import { ProfissionalService } from 'src/app/shared/service/profissional.service';

@Component({
  selector: 'app-editestabelecimento',
  templateUrl: './editestabelecimento.component.html',
  styleUrls: ['./editestabelecimento.component.css']
})
export class EditestabelecimentoComponent implements OnInit {

  private id:number;
  private estabelecimento: Estabelecimento;
  public  estabelecimentolForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute, 
    private route2:Router,
    private estabelecimentoService: EstabelecimentoService
    ) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
  
      this.estabelecimentolForm = this.fb.group({
        nome:['',Validators.required],
        endereco:[''],
        telefone :[''],
      })
  
      this.estabelecimento = new Estabelecimento();
      this.estabelecimentoService.getById(this.id).subscribe( data => {
        this.estabelecimento = data;
        this.estabelecimentolForm = this.fb.group({
          nome:[this.estabelecimento.nome,Validators.required],
          endereco:[this.estabelecimento.endereco],
          telefone :[this.estabelecimento.telefone]
        })
  
      });
   
    }

    updateEstabelecimento(){
      this.estabelecimentoService.update(this.estabelecimento.id,this.estabelecimentolForm.value).subscribe(result=>{
        this.route2.navigate(['/estabelecimento']);
      });
    }

}
