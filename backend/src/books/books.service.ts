import { Injectable} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { map } from 'rxjs/operators';

@Injectable()
export class BooksService {
 constructor(private httpService: HttpService) {}

//  fetchData() {
//     return this.httpService
//       .get('https://api.example.com/data')
//     }
// }
async fetchBooks(query: string) {
    const apiKey = 'AIzaSyAX_S6g86z3oW7K0N7skLk5TQwaFC0sIIA'; // Replace with your actual API key
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`;

    return this.httpService.get(url).pipe(
      map(response => response.data)
    ).toPromise();
 }
}