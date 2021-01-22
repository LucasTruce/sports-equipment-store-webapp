import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get(API_URL + 'productCategory');
  }
}
