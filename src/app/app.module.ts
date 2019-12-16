import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BookComponent } from "./book/book.component";
import { FormComponent } from "./form/form.component";
import { CloudinaryModule } from "@cloudinary/angular-5.x";
import * as Cloudinary from "cloudinary-core";
import { FileUploadModule } from "ng2-file-upload";
import { PhotoUploadComponent } from "./photo-upload/photo-upload.component";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MglTimelineModule } from "angular-mgl-timeline";
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    FormComponent,
    PhotoUploadComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MglTimelineModule,
    CloudinaryModule.forRoot(Cloudinary, {
      cloud_name: "babybook",
      upload_preset: "custom_default"
    }),
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
