import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllGroupsComponent } from './show-all-groups.component';

describe('ShowAllGroupsComponent', () => {
  let component: ShowAllGroupsComponent;
  let fixture: ComponentFixture<ShowAllGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
