import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import {TableModule} from "primeng/table";
import {ScrollingModule} from '@angular/cdk/scrolling';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ScrollingModule,
        TableModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
