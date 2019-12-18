import { Component, OnInit } from "@angular/core";
import { slideAnimation } from "./slide.animation";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
  animations: [slideAnimation]
})
export class AboutComponent implements OnInit {
  currentIndex = 0;
  slides = [
    { image: "assets/img00.jpg", description: "Image 00" },
    { image: "assets/img01.jpg", description: "Image 01" },
    { image: "assets/img02.jpg", description: "Image 02" },
    { image: "assets/img03.jpg", description: "Image 03" },
    { image: "assets/img04.jpg", description: "Image 04" }
  ];

  constructor() {
    this.preloadImages();
  }

  preloadImages() {
    this.slides.forEach(slide => {
      new Image().src = slide.image;
    });
  }

  setCurrentSlideIndex(index) {
    this.currentIndex = index;
  }

  isCurrentSlideIndex(index) {
    return this.currentIndex === index;
  }

  prevSlide() {
    this.currentIndex =
      this.currentIndex < this.slides.length - 1 ? ++this.currentIndex : 0;
  }

  nextSlide() {
    this.currentIndex =
      this.currentIndex > 0 ? --this.currentIndex : this.slides.length - 1;
  }

  ngOnInit() {}
}
