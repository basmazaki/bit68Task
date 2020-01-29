import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { Category } from '../ViewModales/category';
import { environment } from 'src/environments/environment';
import { Product } from '../ViewModales/product';

@Injectable({
  providedIn: 'root'
})
export class ServiceShareService {
  listOfProducts:Product[];
  private currentCartCount = new BehaviorSubject(0);
  currentMessage = this.currentCartCount.asObservable();
  isChecked:boolean;
  constructor(private http:HttpClient) { 
   
  }
 

  
  getAllCategories():Observable<Category[]>
  {
  return this.http.get<Category[]>(`${environment.url}`);
  }
  //Card
  updateCartCount(count: number) {
    this.currentCartCount.next(count)
    
    }
    //card
addProductToCart(prodcuts: any) {
  localStorage.setItem("product", JSON.stringify(prodcuts));
}
getProductFromCart() {
  //return localStorage.getItem("product");
  return JSON.parse(localStorage.getItem('product'));
}
removeAllProductFromCart() {
  return localStorage.removeItem("product");
}
// removeOneProductFromCard(prd:Product)
// {
// return localStorage.removeItem("product")
// }
errorHandler(error: Response) {  
  console.log(error);  
  return throwError(error);  
}
  }
