import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialRegistroPage } from './historial-registro.page';

describe('HistorialRegistroPage', () => {
  let component: HistorialRegistroPage;
  let fixture: ComponentFixture<HistorialRegistroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HistorialRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
