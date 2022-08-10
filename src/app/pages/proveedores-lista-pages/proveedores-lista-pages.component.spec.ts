import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresListaPagesComponent } from './proveedores-lista-pages.component';

describe('ProveedoresListaPagesComponent', () => {
  let component: ProveedoresListaPagesComponent;
  let fixture: ComponentFixture<ProveedoresListaPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedoresListaPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedoresListaPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
