import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksToolbarComponent } from './books-toolbar.component';

describe('BooksToolbarComponent', () => {
  let component: BooksToolbarComponent;
  let fixture: ComponentFixture<BooksToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
