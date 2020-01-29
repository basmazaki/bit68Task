import { Component, OnInit } from '@angular/core';
import { Product } from '../ViewModales/product';
import { ServiceShareService } from '../Services/service-share.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {
cardProductList:Product[];
cardItemCount:number;
  constructor(private services:ServiceShareService,private Active_Route:ActivatedRoute) { }

  ngOnInit() {
 this.cardProductList=this.services.getProductFromCart();
 console.log(this.cardProductList);
 this.cardItemCount = this.Active_Route.snapshot.params['cardItemCount'];
 console.log("cardItemCount",this.cardItemCount);
  }
  // change()
  // { console.log("changr");
   
  //   for(let i=0;i<this.cardProductList.length;i++)
  //   {  this.services.isChecked=this.cardProductList[i].isChecked=false;}
  // }
  removeFromCard(prd:Product)
  {
    // console.log(prd);
    const index = this.cardProductList.indexOf(prd, 0);
    console.log(index);
    // console.log(((prd.id)));
    // this.cardProductList=this.services.getProductFromCart();
    this.cardProductList.splice(index,1);
    prd.isChecked=false;
    // console.log(this.cardProductList);
    // this.services.removeAllProductFromCart();
//     for(let i =0 ;i<this.cardItemCount;i++)
//     {

//     }
//     console.log(this.cardItemCount);
//     let CardCount=this.cardItemCount;
//    let currentCardCount=CardCount-1;

// console.log("currentCardCount",currentCardCount);
    this.services.addProductToCart(this.cardProductList); 

    // console.log(this.services.updateCartCount(this.cardItemCount));

  }
  RemoveAllProducts()
  {
    this.services.removeAllProductFromCart();
    this.cardProductList;
   
  }
}
