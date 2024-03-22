import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackChainComponent } from './track-chain.component';

describe('TrackChainComponent', () => {
  let component: TrackChainComponent;
  let fixture: ComponentFixture<TrackChainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackChainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
