import { Component, OnInit } from "@angular/core";
import { BabyService } from "../services/baby.service";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  events: any[];
  constructor(private babyService: BabyService) {}

  ngOnInit() {
    this.events = this.babyService.getEvents();
    console.log(this.events);
    this.events.sort((a, b) => b.date - a.date);
    console.log(this.events);
  }
}
