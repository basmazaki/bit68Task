import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOfProductsPageRoutingModule } from './list-of-products-routing.module';

import { ListOfProductsPage } from './list-of-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListOfProductsPageRoutingModule
  ],
  declarations: [ListOfProductsPage]
})
export class ListOfProductsPageModule {}
