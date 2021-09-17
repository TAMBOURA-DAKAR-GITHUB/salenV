import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiercommuneComponent } from './modifiercommune.component';

describe('ModifiercommuneComponent', () => {
  let component: ModifiercommuneComponent;
  let fixture: ComponentFixture<ModifiercommuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiercommuneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiercommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
