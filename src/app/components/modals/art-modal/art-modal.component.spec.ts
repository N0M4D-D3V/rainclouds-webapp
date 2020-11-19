import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtModalComponent } from './art-modal.component';

describe('ArtModalComponent', () => {
  let component: ArtModalComponent;
  let fixture: ComponentFixture<ArtModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
