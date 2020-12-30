import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvinculoComponent } from './formvinculo.component';

describe('FormvinculoComponent', () => {
  let component: FormvinculoComponent;
  let fixture: ComponentFixture<FormvinculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormvinculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormvinculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
