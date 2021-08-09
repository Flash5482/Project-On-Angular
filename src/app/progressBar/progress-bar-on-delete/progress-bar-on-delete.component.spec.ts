import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarOnDeleteComponent } from './progress-bar-on-delete.component';

describe('ProgressBarOnDeleteComponent', () => {
  let component: ProgressBarOnDeleteComponent;
  let fixture: ComponentFixture<ProgressBarOnDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarOnDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarOnDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
