import { Component, OnInit } from "@angular/core";
import { BabyService } from "../services/baby.service";
import { Router } from "@angular/router";
import { LocalDataBaseService } from "../services/local-data-base.service";

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
  localEvents: any[];
  // filterText: string = "";

  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = true;
  side = "left";
  event: any;
  eventIndex: number;

  testColor: string = "blue";

  constructor(
    private babyService: BabyService,
    private router: Router,
    private localService: LocalDataBaseService
  ) {}

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

  deleteEvents(index: number) {
    this.babyService.deleteEvent(index);
  }

  clickEvent(index: number) {
    this.status = !this.status;
    this.index = index;
  }
  addNewEvent() {
    this.router.navigate(["form"]);
  }

  editEvent(index: number) {
    this.router.navigate(["edit"], { queryParams: { id: index } });
    // this.router.navigate(['/products'], { queryParams: { order: 'popular', 'price-range': 'not-cheap' } });
  }

  ngOnInit() {
    this.events = this.babyService.getEvents();
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
    if (expanded) {
      this.event = this.events[index];
      this.eventIndex = index;
    } else if (index === this.eventIndex) {
      this.event = null;
      this.eventIndex = null;
    }
  }

  toggleSide() {
    this.side = this.side === "left" ? "right" : "left";
  }

  changeColor() {
    if (this.testColor === "blue") {
      this.testColor = "red";
    } else {
      this.testColor = "blue";
    }
    return this.testColor;
  }

  // filterByTitle(): any[] {
  //   if (!this.filterText.trim()) {
  //     return this.events;
  //   }

  //   const match = this.filterText.toLowerCase();
  //   return this.events.filter(event => {
  //     event.title.toLowerCase().includes(match);
  //   });
  // }
}
