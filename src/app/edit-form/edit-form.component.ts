import { Component, OnInit } from "@angular/core";
import { BabyService } from "../services/baby.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-form",
  templateUrl: "./edit-form.component.html",
  styleUrls: ["./edit-form.component.css"]
})
export class EditFormComponent implements OnInit {
  photoId = "angular_sample/wmny0d3cecsdempeusfc.jpg";
  event: any;
  id: string;

  constructor(
    private babyService: BabyService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  onSubmit(form: any): void {
    let newEvent = {
      title: form.value.title,
      description: form.value.description,
      date: new Date(form.value.date),
      image: this.photoId
    };

    this.babyService.saveEvent(newEvent, this.id);
    // console.log(this.babyService.events);
    // console.log(newEvent);
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

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params); // {order: "popular"}

      this.id = params.id;
      console.log(this.id); // popular
      this.event = this.babyService.getEvents()[this.id];
      this.photoId = this.event.image;
    });
  }
}
