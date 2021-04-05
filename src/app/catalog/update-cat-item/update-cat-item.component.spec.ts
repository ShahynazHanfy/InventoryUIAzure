import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCatItemComponent } from './update-cat-item.component';

describe('UpdateCatItemComponent', () => {
  let component: UpdateCatItemComponent;
  let fixture: ComponentFixture<UpdateCatItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCatItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
