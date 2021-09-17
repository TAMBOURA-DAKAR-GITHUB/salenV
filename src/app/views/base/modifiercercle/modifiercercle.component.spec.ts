import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiercercleComponent } from './modifiercercle.component';

describe('ModifiercercleComponent', () => {
  let component: ModifiercercleComponent;
  let fixture: ComponentFixture<ModifiercercleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiercercleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiercercleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
