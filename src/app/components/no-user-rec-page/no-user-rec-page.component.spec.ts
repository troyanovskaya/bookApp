import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoUserRecPageComponent } from './no-user-rec-page.component';

describe('NoUserRecPageComponent', () => {
  let component: NoUserRecPageComponent;
  let fixture: ComponentFixture<NoUserRecPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoUserRecPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoUserRecPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
