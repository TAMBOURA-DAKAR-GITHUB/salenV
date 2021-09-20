import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierplaceComponent } from './modifierplace.component';

describe('ModifierplaceComponent', () => {
  let component: ModifierplaceComponent;
  let fixture: ComponentFixture<ModifierplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
