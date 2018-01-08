import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/distinctUntilChanged';

import { GaleriaService } from './galeria.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.sass']
})
export class GaleriaComponent implements OnInit {
  galeria: any[];
  galeria2: any[];
  myData: any[];
  showSelected: boolean;

  constructor(private galeriaService: GaleriaService) {this.showSelected = true; }


  MostraImg() {
    this.showSelected = true;
  }

  EscondeImg() {
    this.showSelected = false;
  }

  ngOnInit() {

    this.galeriaService
        .getResults()
        .debounceTime(400)
        .distinctUntilChanged()
        .subscribe(resultado => { this.myData = resultado.games});

    this.galeriaService
        .getTwitch()
        .then(result => this.galeria = result.top)
        .catch(error => console.log(error));

    this.galeriaService
        .getTwitch2()
        .then(mostrar => { this.galeria2 = mostrar.streams; console.log(mostrar.streams)})
        .catch(error => console.log(error));
  }

}
