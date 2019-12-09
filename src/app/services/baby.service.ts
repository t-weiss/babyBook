import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BabyService {
  events: any[] = [
    {
      title: "Birth",
      description: "Baby's birth",
      date: new Date("2015-01-08"),
      image: "angular_sample/j9cuot6lolemzppjt8gz.png"
    },
    {
      title: "started Sprinting Today",
      description: "just got up and started to run!!",
      date: new Date("2019-02-09"),
      image: "angular_sample/j9cuot6lolemzppjt8gz.png"
    },
    {
      title: "first tooth",
      description: "billy got his first tooth",
      date: new Date("2017-03-10"),
      image: "angular_sample/j9cuot6lolemzppjt8gz.png"
    }
  ];

  sortedEvents;

  //  this.sortedEvents = this.events.sort((a, b) => b.date - a.date);

  getEvents(): any {
    return this.events;
  }

  setEvents(newEvent): void {
    this.events.push(newEvent);
  }

  constructor(private http: HttpClient) {}
  getPhotos(): Observable<any> {
    return this.http.get(
      "CLOUDINARY_URL=cloudinary://525113569772349:HJt3S_txALgDBo1a-NcuIcZ_WDA@babybook"
    );
  }
}
