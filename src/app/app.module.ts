import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppLoader1Module } from './app-loader1/app-loader1.module';
import { AppComponent } from './app.component';
import { AppLoader2Module } from './app-loader2/app-loader2.module';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppLoader2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
