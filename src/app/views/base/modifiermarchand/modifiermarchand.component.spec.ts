import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiermarchandComponent } from './modifiermarchand.component';

describe('ModifiermarchandComponent', () => {
  let component: ModifiermarchandComponent;
  let fixture: ComponentFixture<ModifiermarchandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiermarchandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiermarchandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
