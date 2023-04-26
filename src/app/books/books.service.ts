import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book, IBook, IBookOptions } from '../types/book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  googleBooks = new BehaviorSubject<IBook[]>([]);
  googleBookCount = new BehaviorSubject<number>(0);
  libraryBooks = new BehaviorSubject<Book[]>([]);
  private googleApiKey = 'AIzaSyDjUo8-f3Vxgg95FZbCYqwePsj6H9pZcIA';
  constructor(private http: HttpClient) {}
  getGoogleBooks(searchQuery: string, category: string, sortQuery: string, startPos: number, loadType: string) {
    // Set current search position to 0 on new search
    if (loadType === 'new') {
      startPos = 0;
    }
    // format search and category queries
    const searchFilter = searchQuery.trim().split(' ').join('+');
    const categoryFilter = category !== 'All' ? `+subject:${category}` : '';
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchFilter}${categoryFilter}&orderBy=${sortQuery}&startIndex=${startPos}&maxResults=${30}&key=${
      this.googleApiKey
    }`;
    this.http.get(url).subscribe((res: any) => {
      const books: IBook[] = res.items;
      const bookCount: number = res.totalItems;
      this.googleBooks.next(books);
      this.googleBookCount.next(bookCount);
    });
  }
  getLibrary() {
    console.log('getGoogleBooks()');
  }
  findBook(id: string) {
    console.log('getGoogleBooks()');
  }
  addBookToLibrary() {
    console.log('getGoogleBooks()');
  }
  deleteBookFromLibrary() {
    console.log('getGoogleBooks()');
  }
  updateBookInLibrary() {
    console.log('getGoogleBooks()');
  }
}
