import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdsetComponent } from './update-adset.component';

describe('UpdateAdsetComponent', () => {
  let component: UpdateAdsetComponent;
  let fixture: ComponentFixture<UpdateAdsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAdsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
