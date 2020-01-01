import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerCartComponent } from './flower-cart.component';

describe('FlowerCartComponent', () => {
  let component: FlowerCartComponent;
  let fixture: ComponentFixture<FlowerCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
