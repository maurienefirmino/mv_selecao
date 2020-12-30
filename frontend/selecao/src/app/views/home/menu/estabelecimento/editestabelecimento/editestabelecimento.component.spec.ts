import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditestabelecimentoComponent } from './editestabelecimento.component';

describe('EditestabelecimentoComponent', () => {
  let component: EditestabelecimentoComponent;
  let fixture: ComponentFixture<EditestabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditestabelecimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditestabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
