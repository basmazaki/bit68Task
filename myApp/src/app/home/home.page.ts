import { Component, OnInit } from '@angular/core';
import { ServiceShareService } from '../Services/service-share.service';
import { Category } from '../ViewModales/category';
import { NavController } from '@ionic/angular';
import { ListOfProductsPage } from '../list-of-products/list-of-products.page';
import { Router } from '@angular/router';
import { Product } from '../ViewModales/product';
// references
// https://stackblitz.com/edit/angular-sort-filter?file=src%2Fapp%2Fapp.component.ts
// https://www.freakyjolly.com/ionic-4-ion-reorder-list-drag-drop-sorting-list-in-ionic-4-using-ion-reorder-component/
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  listOfCategory: Category[];
  firstList: Category[] = [];
  secondList: Category[] = [];
  listOfProduct: Product[];

  constructor(private service: ServiceShareService, private navController: NavController, private router: Router) { }
  ngOnInit() {
    this.service.getAllCategories().subscribe(
      res => {
        this.listOfCategory = res;
        console.log('cat result', this.listOfCategory);
        for (let i = 0; i < this.listOfCategory.length; i++) {
          if (i < this.listOfCategory.length / 2) { console.log(this.firstList.push(this.listOfCategory[i])) }
          else {
            this.secondList.push(this.listOfCategory[i]);
          }
        }
      },
      err => { console.log(err); }
    );
  }
  goToProducts(catID: number) {

    console.log(catID);
    this.router.navigate(['/list-of-products', catID]);
  }
}
