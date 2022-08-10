import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarTrabajadorPagesComponent } from './insertar-trabajador-pages.component';

describe('InsertarTrabajadorPagesComponent', () => {
  let component: InsertarTrabajadorPagesComponent;
  let fixture: ComponentFixture<InsertarTrabajadorPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarTrabajadorPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarTrabajadorPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
