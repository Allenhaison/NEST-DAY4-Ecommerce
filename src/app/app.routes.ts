import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';

import { ProductsByCategoryComponent } from './pages/products-by-category/products-by-category.component';


export const routes: Routes = [


    {
        path: '',
        component:HomeComponent
    },
    {
        path:'category',
        component:CategoryComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'product',
        component:ProductComponent
    },
     { path: 'product/:id', component: ProductComponent },
     
     { path: 'categories', component: CategoryComponent },

    { path: 'category/:name', component: ProductsByCategoryComponent }




];
