import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevTipComponent } from './dev-tip.component';

describe('DevTipComponent', () => {
  let component: DevTipComponent;
  let fixture: ComponentFixture<DevTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevTipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
