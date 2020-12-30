import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofissionalComponent } from './editprofissional.component';

describe('EditprofissionalComponent', () => {
  let component: EditprofissionalComponent;
  let fixture: ComponentFixture<EditprofissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprofissionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
