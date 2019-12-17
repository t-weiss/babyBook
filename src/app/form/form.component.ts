import { Component, OnInit } from "@angular/core";
import { BabyService } from "../services/baby.service";
import { Router, RouterOutlet, OutletContext } from "@angular/router";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  photoId = "angular_sample/wmny0d3cecsdempeusfc.jpg";

  constructor(private babyService: BabyService, private router: Router) {}
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
