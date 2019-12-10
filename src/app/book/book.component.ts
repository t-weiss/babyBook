import { Component, OnInit } from "@angular/core";
import { BabyService } from "../services/baby.service";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  events: any[];
  status: boolean = false;
  constructor(private babyService: BabyService) {}

  clickEvent() {
    this.status = !this.status;
  }

  ngOnInit() {
    this.events = this.babyService.getEvents();
    console.log(this.events);
    this.events.sort((a, b) => a.date - b.date);
    console.log(this.events);
  }
}
