
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginPage } from './login.page';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    LoginRoutingModule,
    HttpClientModule
  ],
  providers:[
    ProductServicesService
  ]
})
export class LoginModule { }
