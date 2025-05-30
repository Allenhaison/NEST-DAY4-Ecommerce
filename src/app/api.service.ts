import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getproducts(){
       return this.http.get('https://fakestoreapi.com/products');
  }

  getproductbyid(id:number){
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }

  getcategories(){
    return this.http.get('https://fakestoreapi.com/products/categories');
  }

  getProductsByCategory(categoryName: string): Observable<any[]> {
  return this.http.get<any[]>(`/api/products/category/${categoryName}`);
}


}


