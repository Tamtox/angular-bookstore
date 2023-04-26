import { Book, IBook } from '@/app/types/book';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss'],
})
export class BookListItemComponent {
  @Input() book!: IBook;
}
