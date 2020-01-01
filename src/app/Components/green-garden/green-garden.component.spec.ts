import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenGardenComponent } from './green-garden.component';

describe('GreenGardenComponent', () => {
  let component: GreenGardenComponent;
  let fixture: ComponentFixture<GreenGardenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenGardenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenGardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
