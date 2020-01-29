import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceShareService } from '../Services/service-share.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../ViewModales/product';
import { Category } from '../ViewModales/category';
import { AlertController } from '@ionic/angular';
// reference https://stackoverflow.com/questions/56277706/sorting-http-get-data-in-angular-7
@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.page.html',
  styleUrls: ['./list-of-products.page.scss'],
})
export class ListOfProductsPage implements OnInit {

  listOfProduct: Product[];
  ListOfCategory: Category[];
  cat: Category;
  catID: number;
  CheckSpan = false;
  cartItemCount: number = 0;
  productAddedTocart: Product[];

  constructor(private services: ServiceShareService,
    private Active_Rpue: ActivatedRoute,
    private alertCtrl: AlertController,
    private router: Router) {

  }

  ngOnInit() {
    console.log("in load");
    console.log(this.services.currentMessage);
    this.services.currentMessage.subscribe((msg) => {
      this.cartItemCount = msg;
      this.cartItemCount = this.services.getProductFromCart().length;
      this.services.updateCartCount(this.cartItemCount);
    }
    );
    console.log("cartItemCount",this.cartItemCount)

    this.catID = this.Active_Rpue.snapshot.params['catID'];
    this.services.getAllCategories().subscribe((res) => {
      this.ListOfCategory = res;
      this.cat = this.ListOfCategory[this.catID - 1];
      this.listOfProduct = this.cat.products;
      let x = this.listOfProduct.length;
      // console.log(this.services.isChecked)
      // for(let i=0;i<x;i++)
      // {  this.services.isChecked=this.listOfProduct[i].isChecked=this.services.isChecked;}
    },
      (err) => console.log(err));

  }
  showproduct(prd: Product) {
    console.log(prd);
    const alert = this.alertCtrl.create({
      message: prd.name,
      buttons: ['Ok']
    }).then(alert => alert.present());

  }

  AddToCard(prd: Product) {
    console.log(prd.name)
    prd.isChecked = !prd.isChecked;
    //  Card
    this.productAddedTocart = this.services.getProductFromCart();
    if (this.productAddedTocart == null) {
      this.productAddedTocart = [];
      this.productAddedTocart.push(prd);
      this.services.addProductToCart(this.productAddedTocart);
    }
    else {
      let tempProduct = this.productAddedTocart.find(p => p.id == prd.id);
      if (tempProduct == null) {
        this.productAddedTocart.push(prd);
        this.services.addProductToCart(this.productAddedTocart);
      }
    }
    this.cartItemCount = this.productAddedTocart.length;
    this.services.updateCartCount(this.cartItemCount);
    console.log(this.cartItemCount);
  }

  goToCardDetails() {
    this.router.navigate(['/card-details', this.cartItemCount]);
  }
}
