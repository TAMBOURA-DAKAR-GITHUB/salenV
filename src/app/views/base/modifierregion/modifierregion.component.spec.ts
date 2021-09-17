import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierregionComponent } from './modifierregion.component';

describe('ModifierregionComponent', () => {
  let component: ModifierregionComponent;
  let fixture: ComponentFixture<ModifierregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierregionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
