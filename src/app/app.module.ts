import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { BooksService } from './books/books.service';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookListItemComponent } from './books/book-list/book-list-item/book-list-item.component';
import { BooksToolbarComponent } from './books/books-toolbar/books-toolbar.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, BooksComponent, BookListComponent, BookListItemComponent, BooksToolbarComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [BooksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
