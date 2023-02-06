import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPlaylistComponent } from './mes-playlist.component';

describe('MesPlaylistComponent', () => {
  let component: MesPlaylistComponent;
  let fixture: ComponentFixture<MesPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesPlaylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
