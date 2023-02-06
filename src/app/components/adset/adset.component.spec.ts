import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsetComponent } from './adset.component';

describe('AdsetComponent', () => {
  let component: AdsetComponent;
  let fixture: ComponentFixture<AdsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
