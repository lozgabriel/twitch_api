import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

import { GaleriaService } from '../galeria/galeria.service';

@Component({
  selector: 'app-galeria-detalhe',
  templateUrl: './galeria-detalhe.component.html',
  styleUrls: ['./galeria-detalhe.component.sass']
})
export class GaleriaDetalheComponent implements OnInit {
  lista: any[];
  jogo: any[];

    constructor(
      private galeriaService: GaleriaService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

  ngOnInit(): void {

    this.route.params.forEach((params: Params) => {
      const id: number = params['id'];

      this.galeriaService
      .getTwitch()
      .then(result => this.lista = result.top[id])
      .then(filtro => this.jogo = filtro)
      .catch(error => console.log(error));

    });


  }

}
