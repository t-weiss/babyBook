import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookComponent } from "./book/book.component";
import { FormComponent } from "./form/form.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "form", component: FormComponent },
  { path: "book", component: BookComponent },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
