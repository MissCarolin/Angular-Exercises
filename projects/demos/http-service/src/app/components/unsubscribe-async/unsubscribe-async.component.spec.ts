import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeAsyncComponent } from './unsubscribe-async.component';

describe('UnsubscribeAsyncComponent', () => {
  let component: UnsubscribeAsyncComponent;
  let fixture: ComponentFixture<UnsubscribeAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsubscribeAsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscribeAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
