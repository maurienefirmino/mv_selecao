import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from 'src/app/shared/model/Estabelecimento.model';
import { EstabelecimentoService } from 'src/app/shared/service/Estabelecimento.service';
@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.css']
})
export class EstabelecimentoComponent implements OnInit {

  dataSource: Estabelecimento[];

  constructor(
    public estabelecimentoService: EstabelecimentoService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.estabelecimentoService.getData().subscribe(data=>{
      this.dataSource = data;
    })
  }

   displayedColumns: string[] = ['name','endereco','telefone','opcoes'];

}
