import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSectorsComponent } from './list-sectors.component';

describe('ListSectorsComponent', () => {
  let component: ListSectorsComponent;
  let fixture: ComponentFixture<ListSectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
