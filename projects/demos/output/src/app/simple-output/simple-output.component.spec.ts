import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleOutputComponent } from './simple-output.component';

describe('SimpleOutputComponent', () => {
  let component: SimpleOutputComponent;
  let fixture: ComponentFixture<SimpleOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
