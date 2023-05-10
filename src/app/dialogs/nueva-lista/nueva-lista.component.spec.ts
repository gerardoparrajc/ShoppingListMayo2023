import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaListaComponent } from './nueva-lista.component';

describe('NuevaListaComponent', () => {
  let component: NuevaListaComponent;
  let fixture: ComponentFixture<NuevaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
