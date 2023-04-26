import { Component, OnInit } from '@angular/core';
import { Book, IBook } from '@/app/types/book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books$!: IBook[];
  constructor(private booksService: BooksService) {}
  ngOnInit(): void {
    this.booksService.getGoogleBooks('alice', 'All', 'Relevance', 0, 'new');
    this.booksService.googleBooks.subscribe((books) => {
      this.books$ = books;
    });
  }
}
