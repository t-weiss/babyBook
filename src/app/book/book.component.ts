import { Component, OnInit } from "@angular/core";
import { BabyService } from "../services/baby.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  events: any[];
  status: boolean = false;
  index: number = 0;
  birth: any;
  age: number;
  tips: any[];
  tipNumb: number;

  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = true;
  side = "left";

  constructor(private babyService: BabyService, private router: Router) {}

  ageStuff() {
    if (this.age < 3) {
      this.tipNumb = 0;
    } else if (this.age <= 6 && this.age > 3) {
      this.tipNumb = 1;
    } else if (this.age <= 9 && this.age > 6) {
      this.tipNumb = 2;
    } else if (this.age <= 12 && this.age > 9) {
      this.tipNumb = 3;
    } else if (this.age <= 24 && this.age > 12) {
      this.tipNumb = 4;
    } else if (this.age <= 36 && this.age > 24) {
      this.tipNumb = 5;
    } else {
      this.tipNumb = 6;
    }
  }

  clickEvent(index: number) {
    this.status = !this.status;
    this.index = index;
  }
  addNewEvent() {
    this.router.navigate(["form"]);
  }

  ngOnInit() {
    this.events = this.babyService.getEvents();
    console.log(this.events);

    this.events.sort((a, b) => a.date - b.date);
    console.log(this.events);

    this.birth = this.babyService.getBirthStart();
    console.log(this.birth);

    this.age = this.babyService.getAge();
    console.log(this.age);

    this.tips = this.babyService.getTips();
    console.log(this.tips);
    this.ageStuff();
  }

  onHeaderClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onExpandEntry(expanded, index) {
    console.log(`Expand status of entry #${index} changed to ${expanded}`);
  }

  toggleSide() {
    this.side = this.side === "left" ? "right" : "left";
  }
}
