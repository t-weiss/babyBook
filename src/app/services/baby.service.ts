import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LocalDataBaseService } from "./local-data-base.service";

@Injectable({
  providedIn: "root"
})
export class BabyService {
  babyDevTips: any[] = [
    {
      title: "Baby Developmental Milestones: By 3 Months",
      tip1: "May raise head and chest while on tummy.",
      tip2: "Opens and shuts hands"
    },
    {
      title: "Baby Developmental Milestones: By 6 Months",
      tip1:
        "Makes specific sounds tied to emotions, like happy sound or frustrated sounds.",
      tip2: "Tries to crawl",
      tip3: "Recognizes familiar faces"
    },
    {
      title: "Baby Developmental Milestones: By 9 Months",
      tip1:
        "Makes a lot of different sounds like “mamamama” and “bababababa”!!",
      tip2: "May be clingy with familiar adults",
      tip3: "May be afraid of strangers"
    },
    {
      title: "Baby Developmental Milestones: By 12 Months",
      tip1:
        "Crawls forward on belly by pulling with arms and pushing with legs",
      tip2: "Uses simple gestures, such as shaking head for “no”!!",
      tip3: "Looks at correct picture when the image is named"
    },
    {
      title: "Baby Developmental Milestones: By 2 years",
      tip1: "Climb on and down from furniture without help.",
      tip2:
        "can follow a two-step command (Pick up your toy and put it on the shelf.)",
      tip3: "starts to engage in pretend play, such as feeding a baby doll"
    },
    {
      title: "Baby Developmental Milestones: By 3 years",
      tip1: "Hop and stand on one foot for up to five seconds.",
      tip2:
        "Knows how to use pronouns like “I,” “you,” and “we,” and knows some plural ",
      tip3: "Talks clearly enough that even strangers can usually understand"
    },
    {
      title: "Baby Developmental Milestones: By 4 years",
      tip1: "Increasingly inventive in fantasy play",
      tip1Details:
        "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
      tip2: "Cooperates with other children ",
      tip2Details: "boo boo boo boo boo booboo boo booboo boo booboo boo boo",
      tip3:
        "Throws ball overhand and is able to Catches bounced ball most of the time",
      tip3Details:
        "ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha "
    }
  ];

  events: any[];
  myBirthStart;

  getEvents(): any {
    return this.events;
  }

  addEvent(newEvent: any): void {
    this.events.push(newEvent);
    this.events.sort((a, b) => a.date - b.date);
    this.localDataBase.setEvents(this.events);
  }

  deleteEvent(index) {
    this.events.splice(index, 1);
    this.localDataBase.setEvents(this.events);
  }

  constructor(
    private http: HttpClient,
    private localDataBase: LocalDataBaseService
  ) {
    this.myBirthStart = this.localDataBase.getBirthStart();
    this.events = this.localDataBase.getEvents();
  }

  setBabyName(birthStart): void {
    this.myBirthStart = birthStart;
    this.localDataBase.setBirthStart(birthStart);
    console.log(birthStart);
  }

  getBirthStart(): any {
    return this.myBirthStart;
  }
  getAge() {
    let today = new Date();
    let birthday = new Date(this.myBirthStart.birthday);
    console.log(birthday);
    let age = today.getFullYear() - birthday.getFullYear();
    console.log(age);
    let m = today.getMonth() - birthday.getMonth();
    console.log(m);
    m = age * 12 + m;
    console.log(m);
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      m--;
    }
    return m;
  }

  getTips(): any {
    return this.babyDevTips;
  }
}
