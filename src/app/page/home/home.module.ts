import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomeRoutingModule } from './home-routing.module';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  providers:[
    ProductServicesService
  ]
})
export class HomeModule { }
