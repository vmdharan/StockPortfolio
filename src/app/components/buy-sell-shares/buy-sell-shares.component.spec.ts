import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySellSharesComponent } from './buy-sell-shares.component';

describe('BuySellSharesComponent', () => {
  let component: BuySellSharesComponent;
  let fixture: ComponentFixture<BuySellSharesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuySellSharesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuySellSharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
