import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalonesInventarioPagesComponent } from './balones-inventario-pages.component';

describe('BalonesInventarioPagesComponent', () => {
  let component: BalonesInventarioPagesComponent;
  let fixture: ComponentFixture<BalonesInventarioPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalonesInventarioPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalonesInventarioPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
