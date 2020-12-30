import { Component, OnInit } from '@angular/core';
import { Profissional } from 'src/app/shared/model/Profissional.model';
import { ProfissionalService } from 'src/app/shared/service/profissional.service';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalComponent implements OnInit {

  dataSource: Profissional[];

  constructor(
    public profissionalService: ProfissionalService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.profissionalService.getData().subscribe(data=>{
        this.dataSource = data;
    })
  }

   displayedColumns: string[] = ['name','endereco','telefone','funcao','opcoes'];


}
