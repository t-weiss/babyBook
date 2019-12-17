import { Injectable } from "@angular/core";

const DEFAULT_EVENTS: any[] = [
  {
    title: "Meet baby Micheal Scott",
    description:
      "so happy to say that everything went super smooth. He came out smiling with a full head of hair. so blessed to have had a successful birthing!",
    date: new Date("2017-11-04"),
    image: "angular_sample/hocq8hn08ozs2evlnbax.jpg"
  },
  {
    title: "Christmas Tiiimeee!!",
    description:
      "Was a great time with family and friends. Baby Mike was super happy meeting all of his out of town family for the first time. Going from grandmas arms to mine he finally fell asleep at 3 AM -_-, Was a great time with family and friends. Baby Mike was super happy meeting all of his out of town family for the first time. Going from grandmas arms to mine he finally fell asleep at 3 AM -_-",
    date: new Date("2017-12-25"),
    image: "angular_sample/fzjquo0esfkywnvye6oq.jpg"
  },
  {
    title: "Lemon For the First Time",
    description:
      "Mike tried a lemon for the first time, you can tell how much he liked it LOOOL!!",
    date: new Date("2018-01-10"),
    image: "angular_sample/ilogyruyjv9kp2mv3ztd.jpg"
  },
  {
    title: "First Valentines!!",
    description:
      "Our little cupid, So much love from Grandpa and Grandma for getting him his outfit for this Valentine's Day 💕💕❤️❤️",
    date: new Date("2018-02-14"),
    image: "angular_sample/tut1s0qoptufs060f8ow.jpg"
  },
  {
    title: "Saint Patricks Day!🦹🏼‍♂️👯‍♀️",
    description: "Dressed in green, my little man is saint patty ready",
    date: new Date("2018-03-26"),
    image: "angular_sample/lgy0qety0uau8lfariiz.jpg"
  },
  {
    title: "Easter Egg Surprise",
    description: "Lets go easter egg hunting, Mr.Scott is on the hunt!",
    date: new Date("2018-04-12"),
    image: "angular_sample/znuoprwfphlhih5v5l6v.jpg"
  },
  {
    title: "First Tooth",
    description:
      "Hes growing up so fast!!! Already has  getting his first tooth 😩😭😭",
    date: new Date("2018-08-10"),
    image: "angular_sample/wwoij9uirzlfncp9stgm.jpg"
  }
];

@Injectable({
  providedIn: "root"
})
export class LocalDataBaseService {
  setBirthStart(birthStart: any): void {
    let value = JSON.stringify(birthStart);
    localStorage.setItem("birthStart", value);
  }
  setEvents(events: any[]): void {
    let value = JSON.stringify(events);
    localStorage.setItem("events", value);
  }

  getBirthStart(): any {
    let value = localStorage.getItem("birthStart");
    if (value) {
      let birthStart = JSON.parse(value);
      birthStart.birthday = new Date(birthStart.birthday);
      return birthStart;
    } else {
      return null;
    }
  }
  getEvents(): any[] {
    let value = localStorage.getItem("events");
    if (value) {
      let events: any[] = JSON.parse(value);
      for (let event of events) {
        event.date = new Date(event.date);
      }
      return events;
    } else {
      return DEFAULT_EVENTS;
    }
  }

  constructor() {}
}
