import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBadgeComponent } from './hero-badge.component';

describe('HeroBadgeComponent', () => {
  let component: HeroBadgeComponent;
  let fixture: ComponentFixture<HeroBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
