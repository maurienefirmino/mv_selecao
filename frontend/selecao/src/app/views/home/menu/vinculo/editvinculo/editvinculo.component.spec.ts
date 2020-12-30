import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvinculoComponent } from './editvinculo.component';

describe('EditvinculoComponent', () => {
  let component: EditvinculoComponent;
  let fixture: ComponentFixture<EditvinculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditvinculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditvinculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
