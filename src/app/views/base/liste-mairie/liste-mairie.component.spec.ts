import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMairieComponent } from './liste-mairie.component';

describe('ListeMairieComponent', () => {
  let component: ListeMairieComponent;
  let fixture: ComponentFixture<ListeMairieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMairieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMairieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
