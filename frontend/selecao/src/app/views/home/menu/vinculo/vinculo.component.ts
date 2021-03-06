import { Component, OnInit } from '@angular/core';
import { Vinculo } from 'src/app/shared/model/Vinculo.model';
import { VinculoService } from 'src/app/shared/service/vinculo.service';

@Component({
  selector: 'app-vinculo',
  templateUrl: './vinculo.component.html',
  styleUrls: ['./vinculo.component.css']
})
export class VinculoComponent implements OnInit {

  dataSource: Vinculo[];

  constructor(
    public vinculoService: VinculoService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.vinculoService.getData().subscribe(data=>{
      this.dataSource = data;
    })
  }

  delete(id:number){
    this.vinculoService.delete(id).subscribe( data => {
      this.getData();
    })
  }

   displayedColumns: string[] = ['id_profissional','id_estabelecimento','opcoes'];


}
