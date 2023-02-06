import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdsetComponent } from './create-adset.component';

describe('CreateAdsetComponent', () => {
  let component: CreateAdsetComponent;
  let fixture: ComponentFixture<CreateAdsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAdsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
