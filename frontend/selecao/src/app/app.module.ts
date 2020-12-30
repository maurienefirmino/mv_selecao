import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './views/home/menu/menu.component';
import { ProfissionalComponent } from './views/home/menu/profissional/profissional.component';
import { EstabelecimentoComponent } from './views/home/menu/estabelecimento/estabelecimento.component';
import { VinculoComponent } from './views/home/menu/vinculo/vinculo.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FormvinculoComponent } from './views/home/menu/vinculo/formvinculo/formvinculo.component';
import { FormprofissionalComponent } from './views/home/menu/profissional/formprofissional/formprofissional.component';
import { EditprofissionalComponent } from './views/home/menu/profissional/editprofissional/editprofissional.component';
import { FormestabelecimentoComponent } from './views/home/menu/estabelecimento/formestabelecimento/formestabelecimento.component';
import { EditestabelecimentoComponent } from './views/home/menu/estabelecimento/editestabelecimento/editestabelecimento.component';
import { HeaderComponent } from './views/home/menu/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ProfissionalComponent,
    EstabelecimentoComponent,
    VinculoComponent,
    FormvinculoComponent,
    FormprofissionalComponent,
    EditprofissionalComponent,
    FormestabelecimentoComponent,
    EditestabelecimentoComponent,
    HeaderComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
