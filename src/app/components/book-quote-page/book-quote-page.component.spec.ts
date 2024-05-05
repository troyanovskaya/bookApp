import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookQuotePageComponent } from './book-quote-page.component';

describe('BookQuotePageComponent', () => {
  let component: BookQuotePageComponent;
  let fixture: ComponentFixture<BookQuotePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookQuotePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookQuotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
