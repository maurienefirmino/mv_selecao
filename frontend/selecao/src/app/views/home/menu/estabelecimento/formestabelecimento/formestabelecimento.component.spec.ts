import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormestabelecimentoComponent } from './formestabelecimento.component';

describe('FormestabelecimentoComponent', () => {
  let component: FormestabelecimentoComponent;
  let fixture: ComponentFixture<FormestabelecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormestabelecimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormestabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
