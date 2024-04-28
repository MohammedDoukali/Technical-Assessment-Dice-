import { Controller, Get, Query } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

//   @Get('data')
//   getData() {
//      return this.booksService.fetchData();
//   }
@Get()
 async getBooks(@Query('query') query: string) {
    return await this.booksService.fetchBooks(query);
 }
}
