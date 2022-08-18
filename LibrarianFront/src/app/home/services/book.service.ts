import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Books, Item } from '../interfaces/books';
import { VolumeInfoBD } from '../interfaces/addbookbd';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private API_URL = environment.urlBooksRandom;

  private apiURLById = environment.urlById;

  private apiURLByIsbn = environment.usrlByIsbn;

  private apiURLByTitle = environment.urlByTitle;

private URLaddBook = environment.urlAddBook;


  constructor(private http: HttpClient) {

  }

  getRandomBooks(): Observable<Books> {

    return this.http.get<Books>(`${this.API_URL}/random`);
  }


  buscarLibroPorId(id: string): Observable<Item> {

    return this.http.get<Item>(`${this.API_URL}/getById/${ id }`);

  }


  buscarLibroPorIsbn(isbn: string): Observable<Books> {

    return this.http.get<Books>(`${this.API_URL}/searchByIsbn/${ isbn }`);

  }

  addBook(book: VolumeInfoBD): Observable<VolumeInfoBD> {

    return this.http.get<VolumeInfoBD>(`${this.URLaddBook}, ${book} `);
  }

  searchBookByTitle(title: string): Observable<Books>{

    return this.http.get<Books>(`${this.API_URL}/searchByTitle/${ title }`);

  }

  buscarLibroPorAuthor(author: string): Observable<Books>{

    // Ernest Hemingway
    return this.http.get<Books>(`${this.API_URL}/author/${ author }`);

  }



}





