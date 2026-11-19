import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaJose } from './carta-jose';

describe('CartaJose', () => {
  let component: CartaJose;
  let fixture: ComponentFixture<CartaJose>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaJose],
    }).compileComponents();

    fixture = TestBed.createComponent(CartaJose);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
