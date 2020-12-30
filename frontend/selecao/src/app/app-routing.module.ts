import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { EditestabelecimentoComponent } from './views/home/menu/estabelecimento/editestabelecimento/editestabelecimento.component';
import { EstabelecimentoComponent } from './views/home/menu/estabelecimento/estabelecimento.component';
import { FormestabelecimentoComponent } from './views/home/menu/estabelecimento/formestabelecimento/formestabelecimento.component';
import { EditprofissionalComponent } from './views/home/menu/profissional/editprofissional/editprofissional.component';
import { FormprofissionalComponent } from './views/home/menu/profissional/formprofissional/formprofissional.component';
import { ProfissionalComponent } from './views/home/menu/profissional/profissional.component';
import { EditvinculoComponent } from './views/home/menu/vinculo/editvinculo/editvinculo.component';
import { FormvinculoComponent } from './views/home/menu/vinculo/formvinculo/formvinculo.component';
import { VinculoComponent } from './views/home/menu/vinculo/vinculo.component';

const routes: Routes = [
  { path: '',component: HomeComponent },
  { path:'profissional',component: ProfissionalComponent },
  { path:'profissional/form',component: FormprofissionalComponent },
  { path:'profissional/edit/:id',component: EditprofissionalComponent },
  { path:'estabelecimento',component: EstabelecimentoComponent },
  { path:'estabelecimento/form',component: FormestabelecimentoComponent },
  { path:'estabelecimento/edit/:id',component: EditestabelecimentoComponent },
  { path:'vinculo',component: VinculoComponent },
  { path:'vinculo/form',component: FormvinculoComponent },
  { path:'vinculo/edit/:id',component: EditvinculoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
