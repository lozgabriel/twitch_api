import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaDetalheComponent } from './galeria-detalhe.component';

describe('GaleriaDetalheComponent', () => {
  let component: GaleriaDetalheComponent;
  let fixture: ComponentFixture<GaleriaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
