import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListsPageComponent } from './book-lists-page.component';

describe('BookListsPageComponent', () => {
  let component: BookListsPageComponent;
  let fixture: ComponentFixture<BookListsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookListsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
