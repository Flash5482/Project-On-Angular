import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideLineComponent } from './slide-line.component';

describe('SlideLineComponent', () => {
  let component: SlideLineComponent;
  let fixture: ComponentFixture<SlideLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
