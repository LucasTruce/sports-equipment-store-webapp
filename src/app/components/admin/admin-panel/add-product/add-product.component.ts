import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../services/product/product';
import {ProductService} from '../../../../services/product/product.service';
import {ProductCategoryService} from '../../../../services/product-category/product-category.service';
import {ProductCategory} from '../../../../services/product-category/product-category';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product();
  selectedFile: File = null;
  productCategories: Array<ProductCategory>;

  constructor(private productService: ProductService,
              private productCategoryService: ProductCategoryService,
              private router: Router){
  }

  ngOnInit(){
    this.selectedFile = null;
    this.productCategoryService.getCategories().subscribe(
      response => {
        this.handleResponseCategory(response);
      }
    );
  }

  public onFileChanged(event) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
  }

  addProduct(){
    const formData  = new FormData();


    formData.append('image', this.selectedFile);
    this.productService.uploadImage(formData).subscribe(
      response => {
              if (response) {
                const x = response;
                this.handleResponseImage(x);
                this.productService.addProduct(this.product).subscribe(res => {
                  this.router.navigate(['products']);
                });
              } else {
                console.log('error');
              }
        }
      );
  }

  handleResponseCategory(response){
    this.productCategories = response;
  }

  handleResponseImage(response){
    this.product.imageUrl = response.content;
  }
}
