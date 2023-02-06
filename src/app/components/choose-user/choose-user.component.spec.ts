import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseUserComponent } from './choose-user.component';

describe('ChooseUserComponent', () => {
  let component: ChooseUserComponent;
  let fixture: ComponentFixture<ChooseUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
