import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookComponent } from "./book/book.component";
import { FormComponent } from "./form/form.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { EditFormComponent } from "./edit-form/edit-form.component";

const routes: Routes = [
  { path: "form", component: FormComponent, data: { animation: "form" } },
  { path: "book", component: BookComponent, data: { animation: "book" } },
  { path: "home", component: HomeComponent, data: { animation: "home" } },
  { path: "edit", component: EditFormComponent },
  { path: "about", component: AboutComponent, data: { animation: "about" } },
  // { path: "header", component: AboutComponent, data: { animation: "header" } },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
