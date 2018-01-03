import { Component, OnInit} from '@angular/core';

import 'rxjs/add/operator/debounceTime';

import { GaleriaService } from '../galeria/galeria.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(private galeriaService: GaleriaService) {}

  public search(termo: string): void {
    this.galeriaService.buscarGame(termo);
  }

  ngOnInit(): void {}

}
