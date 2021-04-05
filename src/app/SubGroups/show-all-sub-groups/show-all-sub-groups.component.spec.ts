import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllSubGroupsComponent } from './show-all-sub-groups.component';

describe('ShowAllSubGroupsComponent', () => {
  let component: ShowAllSubGroupsComponent;
  let fixture: ComponentFixture<ShowAllSubGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllSubGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllSubGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
