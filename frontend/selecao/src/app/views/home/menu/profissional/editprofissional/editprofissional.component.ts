import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Profissional } from 'src/app/shared/model/Profissional.model';
import { ProfissionalService } from 'src/app/shared/service/profissional.service';

@Component({
  selector: 'app-editprofissional',
  templateUrl: './editprofissional.component.html',
  styleUrls: ['./editprofissional.component.css']
})
export class EditprofissionalComponent implements OnInit {
  private id:number;
  private profissional: Profissional;
  public profissionalForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute, 
    private route2:Router,
    private profissionalService: ProfissionalService
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.profissionalForm = this.fb.group({
      nome:['',Validators.required],
      endereco:[''],
      telefone_celular :[''],
      telefone_residencial  :[''],
      funcao  :['',Validators.required]
    })

    this.profissional = new Profissional();
    this.profissionalService.getById(this.id).subscribe( data => {
      this.profissional = data;
      this.profissionalForm = this.fb.group({
        nome:[this.profissional.nome,Validators.required],
        endereco:[this.profissional.endereco],
        telefone_celular :[this.profissional.telefone_celular],
        telefone_residencial  :[this.profissional.telefone_residencial],
        funcao  :[this.profissional.funcao,Validators.required]
      })

    });
 
  }

  updateProfissional(){
    this.profissionalService.update(this.profissional.id,this.profissionalForm.value).subscribe(result=>{
      this.route2.navigate(['/profissional']);
    });
  }

}
