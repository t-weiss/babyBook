import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BookComponent } from "./book/book.component";
import { FormComponent } from "./form/form.component";
import { CloudinaryModule } from "@cloudinary/angular-5.x";
import * as Cloudinary from "cloudinary-core";

@NgModule({
  declarations: [AppComponent, BookComponent, FormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: "babybook" })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
