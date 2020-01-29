import { Product } from './product';

export class Category {

    constructor(public id:number,
        public name:string,
        public category_img:ImageData,
        public products:Product[])
    {}
}
