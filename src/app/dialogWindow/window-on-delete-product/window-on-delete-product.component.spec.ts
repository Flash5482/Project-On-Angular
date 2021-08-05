import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowOnDeleteProductComponent } from './window-on-delete-product.component';

describe('WindowOnDeleteProductComponent', () => {
  let component: WindowOnDeleteProductComponent;
  let fixture: ComponentFixture<WindowOnDeleteProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowOnDeleteProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowOnDeleteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
