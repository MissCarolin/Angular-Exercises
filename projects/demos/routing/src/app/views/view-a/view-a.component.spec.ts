import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAComponent } from './view-a.component';

describe('ViewAComponent', () => {
  let component: ViewAComponent;
  let fixture: ComponentFixture<ViewAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
