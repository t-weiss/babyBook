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
  index: number;
  birth: any;
  age: any;

  constructor(private babyService: BabyService, private router: Router) {}

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
  }
}
