import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-by-category',
  imports: [CommonModule],
  templateUrl: './products-by-category.component.html',
  styleUrl: './products-by-category.component.css'
})
export class ProductsByCategoryComponent {
categoryName: string = '';
  products: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.categoryName = this.route.snapshot.paramMap.get('name') || '';

    // Fetch products for this category
    this.apiService.getProductsByCategory(this.categoryName).subscribe((data) => {
      console.log('Products:', data);
      this.products = data;
    });
  }
}
