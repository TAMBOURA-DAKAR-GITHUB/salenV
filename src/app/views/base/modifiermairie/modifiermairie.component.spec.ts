import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiermairieComponent } from './modifiermairie.component';

describe('ModifiermairieComponent', () => {
  let component: ModifiermairieComponent;
  let fixture: ComponentFixture<ModifiermairieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiermairieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiermairieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
