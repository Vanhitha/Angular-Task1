import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagemnotfound } from './pagemnotfound';

describe('Pagemnotfound', () => {
  let component: Pagemnotfound;
  let fixture: ComponentFixture<Pagemnotfound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pagemnotfound],
    }).compileComponents();

    fixture = TestBed.createComponent(Pagemnotfound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
