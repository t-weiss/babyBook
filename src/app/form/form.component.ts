import { Component, OnInit } from "@angular/core";
import { BabyService } from "../services/baby.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  newEvent = {
    title: "",
    description: "",
    date: ""
  };

  constructor(private babyService: BabyService) {}
  onSubmit(): void {
    this.babyService.setEvents(this.newEvent);
    console.log(this.babyService.sortedEvents);
    this.newEvent = {
      title: "",
      description: "",
      date: ""
    };
    console.log(this.newEvent.date);
  }

  ngOnInit() {}
}
