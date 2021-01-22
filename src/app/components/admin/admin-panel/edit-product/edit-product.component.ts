import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../../services/product/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../../../services/product/product';
import {ProductCategory} from '../../../../services/product-category/product-category';
import {ProductCategoryService} from '../../../../services/product-category/product-category.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product = new Product();
  productCategories: Array<ProductCategory>;
  categoryDefault: any;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private productCategoryService: ProductCategoryService,
              private router: Router) { }

  ngOnInit(): void {
    this.productService.getProduct(this.route.snapshot.paramMap.get('id')).subscribe(response => {
      this.succesfullHandle(response);
      this.productCategoryService.getCategories().subscribe(
        res => {
          this.handleResponseCategory(res);
        }
      );
    });
  }

  editProduct(){
    this.productService.updateProduct(this.product, this.route.snapshot.paramMap.get('id')).subscribe(res => {
      this.router.navigate(['products']);
    });
  }

  deleteProduct(){
    this.productService.deleteProduct(this.route.snapshot.paramMap.get('id')).subscribe(res => {
      this.router.navigate(['products']);
    });
  }

  succesfullHandle(response){
    this.product = response;
  }

  handleResponseCategory(response){
    this.productCategories = response;
  }

}
