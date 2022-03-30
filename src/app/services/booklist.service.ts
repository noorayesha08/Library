import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booklist } from '../booklist/booklist';


@Injectable({
  providedIn: 'root'
})
export class BooklistService {

  bookList:Booklist[] = [

    new Booklist(1,"Guido van Rossum","Python",2500),
    new Booklist(2,"James Gosling","Java",2000),
    new Booklist(3,"Dennis Ritchie","C",1500)

  ];

  constructor(private http:HttpClient) {

   }
   getBookList()
   {
     return this.bookList;
   }
}
