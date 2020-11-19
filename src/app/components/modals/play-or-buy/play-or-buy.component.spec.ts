import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayOrBuyComponent } from './play-or-buy.component';

describe('PlayOrBuyComponent', () => {
  let component: PlayOrBuyComponent;
  let fixture: ComponentFixture<PlayOrBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayOrBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayOrBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
