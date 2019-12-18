import { Component, OnInit } from "@angular/core";
import { BabyService } from "../services/baby.service";
import { Router, RouterOutlet, OutletContext } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  photoId = "babymanager-logo-blk_mpqxd1.png";
  ThemeColor;
  subscription: Subscription;

  constructor(private babyService: BabyService, private router: Router) {
    this.subscription = this.babyService.getThemeColor().subscribe(theme => {
      if (theme) {
        this.ThemeColor = theme;
      }
    });
  }

  onSubmit(form: any): void {
    let newEvent = {
      title: form.value.title,
      description: form.value.description,
      date: new Date(form.value.date),
      image: this.photoId
    };

    this.babyService.addEvent(newEvent);
    console.log(this.babyService.events);
    console.log(newEvent);
    form.reset();
    this.router.navigate(["book"]);
  }
  nextPage() {
    this.router.navigate(["book"]);
  }

  getPhotoId(id) {
    this.photoId = id;
    console.log("get id", id);
  }

  ngOnInit() {}
}
