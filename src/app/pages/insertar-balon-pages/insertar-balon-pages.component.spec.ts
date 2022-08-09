import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarBalonPagesComponent } from './insertar-balon-pages.component';

describe('InsertarBalonPagesComponent', () => {
  let component: InsertarBalonPagesComponent;
  let fixture: ComponentFixture<InsertarBalonPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarBalonPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarBalonPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
