import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowOnLogOutComponent } from './window-on-log-out.component';

describe('WindowOnLogOutComponent', () => {
  let component: WindowOnLogOutComponent;
  let fixture: ComponentFixture<WindowOnLogOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowOnLogOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowOnLogOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
