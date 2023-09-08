import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaInicioPage } from './vista-inicio.page';

describe('VistaInicioPage', () => {
  let component: VistaInicioPage;
  let fixture: ComponentFixture<VistaInicioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VistaInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
