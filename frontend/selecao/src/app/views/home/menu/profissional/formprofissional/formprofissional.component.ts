import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfissionalService } from 'src/app/shared/service/profissional.service';

@Component({
  selector: 'app-formprofissional',
  templateUrl: './formprofissional.component.html',
  styleUrls: ['./formprofissional.component.css']
})
export class FormprofissionalComponent implements OnInit {

  public profissionalForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private profissionalService: ProfissionalService,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.profissionalForm = this.fb.group({
      nome:['',Validators.required],
      endereco:[''],
      telefone_celular :[''],
      telefone_residencial  :[''],
      funcao  :['',Validators.required]
    })
  }

  storeProfissional(){
    this.profissionalService.postData(this.profissionalForm.value).subscribe(result=>{
      this.route.navigate(['/profissional']);
    });
  }

}
