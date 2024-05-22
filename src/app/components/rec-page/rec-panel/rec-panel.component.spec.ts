import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecPanelComponent } from './rec-panel.component';

describe('RecPanelComponent', () => {
  let component: RecPanelComponent;
  let fixture: ComponentFixture<RecPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
