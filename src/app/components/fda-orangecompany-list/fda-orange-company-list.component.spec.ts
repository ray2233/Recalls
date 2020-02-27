import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FDAOrangeListComponent } from './fda-orange-list.component';

describe('FDAOrangeListComponent', () => {
  let component: FDAOrangeListComponent;
  let fixture: ComponentFixture<FDAOrangeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FDAOrangeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FDAOrangeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
