import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Estabelecimento } from 'src/app/shared/model/Estabelecimento.model';
import { Profissional } from 'src/app/shared/model/Profissional.model';
import { EstabelecimentoService } from 'src/app/shared/service/Estabelecimento.service';
import { ProfissionalService } from 'src/app/shared/service/profissional.service';
import { VinculoService } from 'src/app/shared/service/vinculo.service';

@Component({
  selector: 'app-formvinculo',
  templateUrl: './formvinculo.component.html',
  styleUrls: ['./formvinculo.component.css']
})
export class FormvinculoComponent implements OnInit {

  public vinculoForm : FormGroup;
  public profissionais:Profissional[];
  public estabelecimentos: Estabelecimento[];


  constructor(
    private fb: FormBuilder,
    private vinculosService: VinculoService,
    private route:Router,
    private profissionalService : ProfissionalService,
    private estabelecimentoService : EstabelecimentoService
  ) { }

  ngOnInit(): void {
    this.vinculoForm = this.fb.group({
      id_estabelecimento:['',Validators.required],
      id_profissional:['',Validators.required]
    })

    this.profissionalService.getData().subscribe(data=>{
      this.profissionais = data;
    })

    this.estabelecimentoService.getData().subscribe(data=>{
      this.estabelecimentos = data;
    })
  }

  storeVinculo(){
    this.vinculosService.postData(this.vinculoForm.value).subscribe(result=>{
      this.route.navigate(['/vinculo']);
    });
  }

}
