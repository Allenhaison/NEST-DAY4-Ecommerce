import { Component  } from '@angular/core';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [RouterLink, CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
 categories: string[] = [];
category: any;

  constructor(private apiService: ApiService) {}

 ngOnInit() {
  this.apiService.getcategories().subscribe((data) => {
    console.log('Categories:', data);
    this.categories = data as string[];
  });
}
}
