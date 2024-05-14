import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoUserRecsComponent } from './no-user-recs.component';

describe('NoUserRecsComponent', () => {
  let component: NoUserRecsComponent;
  let fixture: ComponentFixture<NoUserRecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoUserRecsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoUserRecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
