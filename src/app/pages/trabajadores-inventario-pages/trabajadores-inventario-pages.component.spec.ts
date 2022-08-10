import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadoresInventarioPagesComponent } from './trabajadores-inventario-pages.component';

describe('TrabajadoresInventarioPagesComponent', () => {
  let component: TrabajadoresInventarioPagesComponent;
  let fixture: ComponentFixture<TrabajadoresInventarioPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajadoresInventarioPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajadoresInventarioPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
