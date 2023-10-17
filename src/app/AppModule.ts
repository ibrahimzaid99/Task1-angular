import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/NavBar/NavBar.Component';
import { ContentComponent } from './Components/content/content.component';
import { SliderComponent } from './Components/slider/slider.component';
import { ProductComponent } from './Components/product/product.component';
import { Task1Component } from './task1/task1.component';
import { FormsModule } from '@angular/forms';
import { FootorComponent } from './footor/footor.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContentComponent,
    SliderComponent,
    ProductComponent,
    Task1Component,
    FootorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
