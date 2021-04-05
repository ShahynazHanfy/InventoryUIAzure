import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGroupAndSubComponent } from './show-group-and-sub.component';

describe('ShowGroupAndSubComponent', () => {
  let component: ShowGroupAndSubComponent;
  let fixture: ComponentFixture<ShowGroupAndSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGroupAndSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGroupAndSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
