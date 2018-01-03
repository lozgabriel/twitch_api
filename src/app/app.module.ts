import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { GaleriaService } from './galeria/galeria.service';
import { GaleriaDetalheComponent } from './galeria-detalhe/galeria-detalhe.component';

const routes: Routes = [
  { path: '',
    component: GaleriaComponent
  },

  { path: 'galeria-detalhe/:id',
    component: GaleriaDetalheComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GaleriaComponent,
    GaleriaDetalheComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [GaleriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
