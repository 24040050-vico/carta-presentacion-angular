import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaVictoria } from './carta-victoria';

describe('CartaVictoria', () => {
  let component: CartaVictoria;
  let fixture: ComponentFixture<CartaVictoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaVictoria],
    }).compileComponents();

    fixture = TestBed.createComponent(CartaVictoria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
