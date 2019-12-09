import { Component, OnInit } from "@angular/core";
import { BabyService } from "../services/baby.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  // newEvent = {
  //   title: "",
  //   description: "",
  //   date: new Date("")
  // };

  constructor(private babyService: BabyService) {}
  onSubmit(form: any): void {
    let newEvent = {
      title: form.title,
      description: form.description,
      date: new Date(form.date)
    };
    this.babyService.setEvents(newEvent);
    console.log(this.babyService.events);
    console.log(newEvent);
    this.babyService.events.sort((a, b) => b.date - a.date);
  }

  ngOnInit() {}
}
