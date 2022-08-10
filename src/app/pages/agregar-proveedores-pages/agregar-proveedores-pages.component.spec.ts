import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProveedoresPagesComponent } from './agregar-proveedores-pages.component';

describe('AgregarProveedoresPagesComponent', () => {
  let component: AgregarProveedoresPagesComponent;
  let fixture: ComponentFixture<AgregarProveedoresPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarProveedoresPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarProveedoresPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
