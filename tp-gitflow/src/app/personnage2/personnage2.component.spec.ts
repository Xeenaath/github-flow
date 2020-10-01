import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personnage2Component } from './personnage2.component';

describe('Personnage2Component', () => {
  let component: Personnage2Component;
  let fixture: ComponentFixture<Personnage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Personnage2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Personnage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
