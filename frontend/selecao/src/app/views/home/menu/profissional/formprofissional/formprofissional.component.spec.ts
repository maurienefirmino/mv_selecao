import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormprofissionalComponent } from './formprofissional.component';

describe('FormprofissionalComponent', () => {
  let component: FormprofissionalComponent;
  let fixture: ComponentFixture<FormprofissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormprofissionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormprofissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
