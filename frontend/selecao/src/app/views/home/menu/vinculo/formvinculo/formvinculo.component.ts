import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VinculoService } from 'src/app/shared/service/vinculo.service';

@Component({
  selector: 'app-formvinculo',
  templateUrl: './formvinculo.component.html',
  styleUrls: ['./formvinculo.component.css']
})
export class FormvinculoComponent implements OnInit {

  public vinculoForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private vinculosService: VinculoService
  ) { }

  ngOnInit(): void {
    this.vinculoForm = this.fb.group({
      id_estabelecimento:['',Validators.required],
      id_profissional:['',Validators.required]
    })
  }

  storeVinculo(){
    this.vinculosService.postData(this.vinculoForm.value).subscribe(result=>{});
  }

}
