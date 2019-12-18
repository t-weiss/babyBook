import { Injectable } from "@angular/core";

const DEFAULT_EVENTS: any[] = [
  {
    title: "Meet baby Vivienne",
    description:
      "So happy to say that everything went super smooth. She weighs 8 pounds 10 ounces. So blessed to have such a beautiful baby girl!",
    date: new Date("2017-11-04"),
    image: "Photo_Sep_24_12_17_41_PM_jyf0k4.jpg"
  },
  {
    title: "Photoshoot",
    description:
      "Just got her first photos taken. She is so cute!! Thanks to JD for doing such a great job taking the photos. ",
    date: new Date("2017-12-25"),
    image: "34_zfxh5m.jpg"
  },
  {
    title: "Super Baby",
    description:
      "Vivi went to a birthday party for her friend Tyler. She had a great time. Batman was the theme of the party. She ended up getting cake all over her face. It took so long to clean up but she had a great time. ",
    date: new Date("2018-01-10"),
    image: "IMG_1695_d2ibu0.jpg"
  },
  {
    title: "First birthday",
    description:
      "Vivienne celebrated her first birthday today. Thank you to everyone who came to celebrate with us. Vivi loved her smash cake.",
    date: new Date("2018-02-14"),
    image: "IMG_3235_jgzvyf.jpg"
  },
  {
    title: "My little princess ",
    description: "We had a great day in the park dressed up like princesses!",
    date: new Date("2018-03-26"),
    image: "vivi-1-edits_0027_IMG_5644_fozkim.jpg"
  },
  {
    title: "Easter Egg Surprise",
    description: "Lets go easter egg hunting, Vivienne is on the hunt!",
    date: new Date("2018-04-12"),
    image: "IMG_1791_ym4leq.jpg"
  },
  {
    title: "Riding her Bike",
    description:
      "Look who got a bike for her birthday! She couldn't wait to go out and try it out.",
    date: new Date("2018-08-10"),
    image: "IMG_7272_ja5sc6.jpg"
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
