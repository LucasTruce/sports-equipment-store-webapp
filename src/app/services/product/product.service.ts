import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductsList(){
    return this.http.get(API_URL + 'products');
  }

  getProduct(id){
    return this.http.get(API_URL + 'products/' + id);
  }

  uploadImage(imageData: FormData){
    const api = API_URL + 'products/imageUpload';
    return this.http.post(api, imageData);
  }

  addProduct(product){
    return this.http.post(API_URL + 'products', product);
  }

  updateProduct(product, id){
    return this.http.put(API_URL + 'products/' + id, product);
  }

  deleteProduct(id){
    return this.http.delete(API_URL + 'products/' + id);
  }
}
