import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { DataResolverService } from './resolver/data-resolver.service';
const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'slider',
    loadChildren: () => import('./slider/slider.module').then( m => m.SliderPageModule)
  },
  {
    path: 'list-of-products',
    loadChildren: () => import('./list-of-products/list-of-products.module').then( m => m.ListOfProductsPageModule)
  },
  {
    path: 'list-of-products/:catID',
    // resolve: {
    //   special: DataResolverService
    // },
    loadChildren: () => import('./list-of-products/list-of-products.module').then( m => m.ListOfProductsPageModule)

    // loadChildren: './details/details.module#DetailsPageModule'
  },
  {
    path: 'card-details',
    loadChildren: () => import('./card-details/card-details.module').then( m => m.CardDetailsPageModule)
  },
  {
    path: 'card-details/:cardItemCount',
    loadChildren: () => import('./card-details/card-details.module').then( m => m.CardDetailsPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
