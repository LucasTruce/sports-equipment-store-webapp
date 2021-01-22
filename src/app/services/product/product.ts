import {ProductCategory} from '../product-category/product-category';

export class Product {
  public id: string = '';
  public name: string = '';
  public description: string = '';
  public unitPrice: number = 0;
  public imageUrl: string = '';
  public active: boolean = false;
  public unitsInStock: number = 0;
  public category: ProductCategory;
}
