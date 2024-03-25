import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainHistoryComponent } from './chain-history.component';

describe('ChainHistoryComponent', () => {
  let component: ChainHistoryComponent;
  let fixture: ComponentFixture<ChainHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChainHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChainHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
