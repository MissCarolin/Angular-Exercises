import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeTakeUntilComponent } from './unsubscribe-take-until.component';

describe('UnsubscribeTakeUntilComponent', () => {
  let component: UnsubscribeTakeUntilComponent;
  let fixture: ComponentFixture<UnsubscribeTakeUntilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsubscribeTakeUntilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscribeTakeUntilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
