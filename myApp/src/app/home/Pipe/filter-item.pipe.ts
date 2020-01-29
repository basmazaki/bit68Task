import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItem'
})
export class FilterItemPipe implements PipeTransform {

  transform(listOfProduct: any, searchText: any): any {
    if (searchText == null) return listOfProduct;
    
    return listOfProduct.filter( prd => prd.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1    
      
    //   function (category) {
    //   return category.CategoryName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    // }
    )
  }
}
