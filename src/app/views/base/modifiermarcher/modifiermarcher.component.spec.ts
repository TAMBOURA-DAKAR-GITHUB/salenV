import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiermarcherComponent } from './modifiermarcher.component';

describe('ModifiermarcherComponent', () => {
  let component: ModifiermarcherComponent;
  let fixture: ComponentFixture<ModifiermarcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiermarcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiermarcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
