import { Component, OnInit } from "@angular/core";
import { BabyService } from "../services/baby.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  photoIds = "";

  constructor(private babyService: BabyService, private router: Router) {}
  onSubmit(form: any): void {
    let newEvent = {
      title: form.value.title,
      description: form.value.description,
      date: new Date(form.value.date),
      image: this.photoIds
    };

    this.babyService.setEvents(newEvent);
    console.log(this.babyService.events);
    console.log(newEvent);
    this.babyService.events.sort((a, b) => a.date - b.date);
    form.reset();
    this.router.navigate(["book"]);
  }
  nextPage() {
    this.router.navigate(["book"]);
  }

  getPhotoId(id) {
    this.photoIds = id;
    console.log("get id", id);
  }

  ngOnInit() {}
}
