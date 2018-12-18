import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  title: string = "Product Detail";
  product: IProduct;
  imageWidth: number = 150;
  imageMargin: number = 20;
  errorMessage = '';


  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {

    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProductDetail(id);
    }
  }

  getProductDetail(id: number) {
    this.productService.getProductDetail(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/products'])
  }

}
