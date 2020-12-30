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
      if(data){
        this.dataSource = data;
      }
    })
  }

  delete(id:number){
    this.estabelecimentoService.delete(id).subscribe( data => {
      this.getData();
    })
  }

   displayedColumns: string[] = ['name','endereco','telefone','opcoes'];

}
