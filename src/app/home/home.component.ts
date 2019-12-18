import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BabyService } from "../services/baby.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private babyService: BabyService) {}

  onSubmit(form: any): void {
    let birthStart = {
      name: form.value.childName,
      birthday: new Date(form.value.birthday),
      color: form.value.color
    };
    this.router.navigate(["form"]);
    this.babyService.setBabyName(birthStart);
    console.log(birthStart);
    this.babyService.sendTheme(birthStart.color);
  }

  toBook() {
    this.router.navigate(["book"]);
  }

  ngOnInit() {}
}
